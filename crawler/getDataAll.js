const qs = require('querystring');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const pinyin = require('pinyin').default;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// 下载图片的方法
const downloadImage = async (imageUrl, filePath) => {
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

// pid_list = [1296000];
(async () => {
    for (pid = 0; pid <= 1296000; pid++) {
        // debugger;
        // await sleep(10)
        // 目标网页URL，id作为参数
        const url = 'http://data.shouxi.com/item.php?id=' + pid;

        // 抓取并处理网页
        const response = await axios.get(url)
        const html = response.data;
        const $ = cheerio.load(html);

        // 找到 id = "item1_img" 的 img 标签
        const imgTag = $('#item1_img');
        const imgSrc = imgTag.attr('src');
        if (!imgSrc) {
            console.log(`Image not found,pid=${pid}`);
            continue;
        }

        // 查找所有符合条件的 a 标签
        const links = $("div.flex-row > div.leftSide > p > span > a");

        // 存储每个 a 标签的文本内容（拼音）
        let folderNames = [];

        // 遍历每个 a 标签
        links.each((index, element) => {
            const text = $(element).text().trim(); // 获取 a 标签的文本内容
            console.log(`Original Text: ${text}`);

            // 将文本转换为拼音
            const pinyinText = pinyin(text, {
                style: pinyin.STYLE_NORMAL, // 普通风格，不带声调
                heteronym: false            // 禁止多音字
            }).join(''); // 将拼音数组转换为字符串
            console.log(`Pinyin: ${pinyinText}`);

            /// 将拼音加入 folderNames 数组
            folderNames.push(pinyinText);
        });

        // 不是机制银币，跳过
        if (folderNames[0] != 'jizhiyinbi') {
            console.log(`not 机制银币,pid = ${pid}`);
            continue;
        }
        // 拼接所有拼音，形成文件夹路径
        const folderPath = path.join(__dirname, 'database', ...folderNames);//放在项目文件夹的database下面
        const indexFilePath = path.join(folderPath, 'index.txt');

        // 如果文件夹不存在，创建它
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created folder: ${folderPath}`);
        }
        // 检查 index.txt 文件是否存在
        if (!fs.existsSync(indexFilePath)) {
            fs.writeFileSync(indexFilePath, ''); // 创建空的 index.txt
        }

        // 读取 index.txt 文件内容
        const indexContent = fs.readFileSync(indexFilePath, 'utf8');
        let maxIndex = -1;
        let existingEntry = false;
        // 解析 index.txt 查找已有 pid 记录
        const lines = indexContent.split('\n').filter(Boolean); // 去掉空行
        for (const line of lines) {

            const [recordedPid, recordedIndex] = line.split(':');
            if (recordedPid == pid) {//不能写===因为一个字符串一个数字
                existingEntry = true; // 如果 pid 已经记录，跳过
                break;
            }
            maxIndex = Math.max(maxIndex, parseInt(recordedIndex, 10)); // 获取最大的 index
        }

        // 如果 pid 已存在，跳过
        if (existingEntry) {
            console.log(`PID ${pid} 已存在，跳过下载`);
            continue;
        }

        // 否则，递增 index 并下载图片
        const newIndex = maxIndex + 1;
        const imgPath = path.join(folderPath, `${newIndex}${path.extname(imgSrc)}`);

        // 确保 URL 完整
        const imageUrl = imgSrc.startsWith('http') ? imgSrc : `http://data.shouxi.com/${imgSrc}`;
        // 下载图片到对应文件夹
        try {
            await downloadImage(imageUrl, imgPath)
            console.log('Image downloaded successfully:', imgPath)
        } catch (err) {
            console.error('Error downloading image:', err)
        }

        // 写入描述信息
        const description = $("article.article > p.flex-row-center > span").text().trim();
        console.log(`描述信息:${description}`)
        const describeTextPath = path.join(folderPath, `${newIndex}.txt`)
        fs.writeFileSync(describeTextPath, description); // 创建描述文本

        // 更新 index.txt，记录 pid 和 index 的关系
        fs.appendFileSync(indexFilePath, `${pid}:${newIndex}\n`);

    };
})()

