const qs = require('querystring');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const pinyin = require('pinyin').default;
const sqlite3 = require('sqlite3').verbose();
const util = require('util');
const cloudinary = require('cloudinary').v2;
const crypto = require('crypto');

// Cloudinary配置
cloudinary.config({
    cloud_name: 'dqoviiksy',
    api_key: '727428776932496',
    api_secret: 'pt7gHpOlqVLXFjOBAbOkHDA_OsQ'
});

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

// 创建数据库连接
const db = new sqlite3.Database(path.join(__dirname, 'item.db'), (err) => {
    if (err) {
        console.error('无法连接到数据库:', err.message);
    } else {
        console.log('已连接到 SQLite 数据库');
        // 创建 item 表，将 pid 设置为整数类型的主键
        db.run(`CREATE TABLE IF NOT EXISTS item (
      url TEXT,
      pid INTEGER PRIMARY KEY,
      c0 TEXT,
      c1 TEXT,
      c2 TEXT,
      c3 TEXT,
      c4 TEXT,
      c5 TEXT,
      text TEXT
    )`);
    }
});
 
const itemNum = 500
const batchSize = 500;

const dbGet = util.promisify(db.get.bind(db));
const dbRun = util.promisify(db.run.bind(db));

// 修改 updateClassificationJson 函数
async function updateClassificationJson(classification) {
    const classificationPath = path.join(__dirname, 'classification.json');
    await fs.writeFile(classificationPath, JSON.stringify(classification, null, 2));
    console.log('已更新 classification.json');
}

// 上传图片到Cloudinary的函数
async function uploadToCloudinary(imageUrl) {
    try {
        // 使用图片URL的MD5哈希作为public_id
        const publicId = crypto.createHash('md5').update(imageUrl).digest('hex');
        
        const result = await cloudinary.uploader.upload(imageUrl, {
            folder: 'antidb',
            public_id: publicId,
            overwrite: false, // 不覆盖已存在的图片
            unique_filename: false // 使用指定的public_id
        });
        return result.secure_url;
    } catch (error) {
        if (error.http_code === 400 && error.message.includes('Resource already exists')) {
            // 如果图片已存在，获取现有图片的URL
            const existingImage = await cloudinary.api.resource(publicId, { type: 'upload', prefix: 'antidb' });
            return existingImage.secure_url;
        }
        console.error('上传到Cloudinary时出错:', error);
        return null;
    }
}

(async () => {
    // 修改per_page改变数据获取数量
    const response = await axios.get(`http://data.shouxi.com/item_list.php?a=s&c_cid=1&cid=1&list_type=0&per_page=${itemNum}`)
    const html = response.data;
    const $$ = cheerio.load(html);
    pid_list = []
    // 获取所有pid
    $$('div.auctionListUl>div.auctionListUlItem>ul>li>div>div.imgBox>a').each(async (index, element) => {
        pid = $$(element).attr('href').split('=')[1]
        pid_list.push(pid)
    });

    let count = 0;
    let batchCount = 0;

    let classification = {};

    try {
        const classificationPath = path.join(__dirname, 'classification.json');
        const data = await fs.readFile(classificationPath, 'utf8');
        classification = JSON.parse(data);
    } catch (error) {
        console.log('创建新的 classification 对象');
    }

    for (pid of pid_list) {
        count++;
        batchCount++;
        console.log(`第${count}次，pid=${pid}`);
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

        // 存储每个 a 标签的文本内容（拼音和原始中文）
        let folderNames = [];
        let unicodeNames = [];

        // 遍历每个 a 标签
        links.each((index, link) => {
            const text = $(link).text().trim(); // 获取 a 标签的文本内容
            unicodeNames.push(text);

            // 将文本转换为拼音
            const pinyinText = pinyin(text, {
                style: pinyin.STYLE_NORMAL,
                heteronym: false
            }).join('');

            folderNames.push(pinyinText);
        });

        // // 不是机制银币，跳过
        // if (folderNames[0] != 'jizhiyinbi') {
        //     console.log(`not 机制银币,pid = ${pid}`);
        //     continue;
        // }
        // 拼接所有拼音，形成文件夹路径
        const folderPath = path.join(__dirname, 'database', ...folderNames);//放在项目文件夹的database下面
        const indexFilePath = path.join(folderPath, 'index.txt');

        // // 如果文件夹不存在，创建它
        // if (!fs.existsSync(folderPath)) {
        //     fs.mkdirSync(folderPath, { recursive: true });
        //     console.log(`Created folder: ${folderPath}`);
        // }
        // // 检查 index.txt 文件是否存在
        // if (!fs.existsSync(indexFilePath)) {
        //     fs.writeFileSync(indexFilePath, ''); // 创建空的 index.txt
        // }

        // // 读取 index.txt 文件内容
        // const indexContent = fs.readFileSync(indexFilePath, 'utf8');
        // let maxIndex = -1;
        // let existingEntry = false;
        // // 解析 index.txt 查找已有 pid 记录
        // const lines = indexContent.split('\n').filter(Boolean); // 去掉空行
        // for (const line of lines) {

        //     const [recordedPid, recordedIndex] = line.split(':');
        //     if (recordedPid == pid) {//不能写===因为一个字符串一个数字
        //         existingEntry = true; // 如果 pid 已经记录，跳过
        //         break;
        //     }
        //     maxIndex = Math.max(maxIndex, parseInt(recordedIndex, 10)); // 获取最大的 index
        // }

        // // 如果 pid 已存在，跳过
        // if (existingEntry) {
        //     console.log(`PID ${pid} 已存在，跳过下载`);
        //     continue;
        // }

        // // 否则，递增 index 并下载图片
        // const newIndex = maxIndex + 1;
        // const imgPath = path.join(folderPath, `${newIndex}${path.extname(imgSrc)}`);

        // 确保 URL 完整
        const imageUrl = imgSrc.startsWith('http') ? imgSrc : `http://data.shouxi.com/${imgSrc}`;
        // // 下载图片到对应文件夹
        // try {
        //     await downloadImage(imageUrl, imgPath)
        //     console.log('Image downloaded successfully:', imgPath)
        // } catch (err) {
        //     console.error('Error downloading image:', err)
        // }

        // 写入描述信息
        const description = $("article.article > p.flex-row-center > span").text().trim();
        const title = $('div.flex-row > div.singleLeft > h2.singlePage').text().trim().replace(/^Lot:\d+\s+/, "");

        // const describeTextPath = path.join(folderPath, `${newIndex}.txt`)
        // fs.writeFileSync(describeTextPath, description); // 创建描述文本


        // 在插入数据之前，先检查 pid 是否已存在
        try {
            const row = await dbGet("SELECT pid, url FROM item WHERE pid = ?", [pid]);

            if (row) {
                console.log(`PID ${pid} 已存在，跳过插入`);
            } else {
                // 上传图片到Cloudinary
                console.log(`正在上传 pid=${pid}`);
                const cloudinaryUrl = await uploadToCloudinary(imageUrl);
                if (!cloudinaryUrl) {
                    console.log(`无法上传图片到Cloudinary，跳过 PID: ${pid}`);
                    continue;
                }
                const c0 = folderNames[0] || '';
                const c1 = folderNames[1] || '';
                const c2 = folderNames[2] || '';
                const c3 = folderNames[3] || '';
                const c4 = folderNames[4] || '';
                const c5 = folderNames[5] || '';
                const text = JSON.stringify({ describe: description, title: title });

               

                await dbRun(
                    `INSERT INTO item (url, pid, c0, c1, c2, c3, c4, c5, text) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [cloudinaryUrl, pid, c0, c1, c2, c3, c4, c5, text]
                );

                console.log(`成功插入数据，PID: ${pid}`);
            }
        } catch (err) {
            console.error('操作数据库时出错:', err.message);
        }

        // // 更新 index.txt，记录 pid 和 index 的关系
        // fs.appendFileSync(indexFilePath, `${pid}:${newIndex}\n`);

        // 更新 classification 对象
        let currentLevel = classification;
        for (let i = 0; i < folderNames.length; i++) {
            const key = `c${i}`;
            const folderName = folderNames[i];
            const unicodeName = unicodeNames[i];

            if (!currentLevel[folderName]) {
                currentLevel[folderName] = {
                    [key]: folderName,
                    unicode: unicodeName,
                    childs: {}
                };
            } else if (!currentLevel[folderName].childs) {
                // 确保 childs 属性存在
                currentLevel[folderName].childs = {};
            }

            if (i < folderNames.length - 1) {
                currentLevel = currentLevel[folderName].childs;
            }
        }

        // 每1000次循环更新一次 classification.json
        if (batchCount >= batchSize) {
            console.log(`已处理 ${count} 条数据，正在更新 classification.json...`);
            await updateClassificationJson(classification);
            batchCount = 0; // 重置批次计数
        }
    }

    // 确保最后一次更新
    if (batchCount > 0) {
        console.log(`处理完成，最后更新 classification.json...`);
        await updateClassificationJson(classification);
    }

    // 关闭数据库连接
    db.close((err) => {
        if (err) {
            console.error('关闭数据库时出错:', err.message);
        } else {
            console.log('数据库连接已关闭');
        }
    });
})()
