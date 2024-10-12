const qs = require('querystring');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

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

const PCGSCertSite = 'https://www.pcgs.com.cn/cert/'
const shouxiCertSite = 'http://cert.shouxi.com/ajax'

// 读取图片文件
const imagePath = path.join(__dirname, 'compare/test.jpg');
const imageBuffer = fs.readFileSync(imagePath);

const getAccess = (imageBuffer) => {
    return new Promise((resolve, reject) => {
        // 指定虚拟环境中的 Python 解释器
        const pythonPath = path.join(__dirname, '..','scanner', 'venv', 'Scripts', 'python.exe');
        // 指定要执行的 Python 脚本
        const scriptPath = path.join(__dirname, '..', './scanner/scanner.py');
        // 使用虚拟环境中的 Python 解释器执行脚本
        const pythonProcess = spawn(pythonPath, [scriptPath]);

        // 通过 stdin 发送图片数据
        pythonProcess.stdin.write(imageBuffer);
        pythonProcess.stdin.end(); // 结束输入流

        // 监听 stdout 输出
        pythonProcess.stdout.on('data', async (data) => {
            console.log('Received from Python:', data.toString());
            let scannerData;

            try {
                scannerData = JSON.parse(data.toString());
            } catch (err) {
                return reject('Error parsing JSON: ' + err.message);
            }
            if (scannerData.message != 'succeed') {
                return reject('error: ' + scannerData.message);
            }


            const { code } = scannerData;
            const queryCode = code.slice(-8);
            console.log(scannerData);

            const queryData = {
                action: 'query_cert',
                cert_type: 'pcgs',
                cert_num: queryCode,
                cert_score: 0,
            };

            try {
                const response = await axios.post(shouxiCertSite, qs.stringify(queryData));
                const itemInfo = response.data.data.detail_info; // 数组格式
                console.log(...itemInfo);

                // 处理图像下载
                const imgSrcs = response.data.data.img_info;
                await Promise.all(imgSrcs.map(async (imgSrc, index) => {
                    const imgPath = path.join(__dirname, 'compare', `reference${index}${path.extname(imgSrc)}`);
                    try {
                        await downloadImage(imgSrc, imgPath);
                        console.log('Image downloaded successfully:', imgPath);
                    } catch (err) {
                        console.error('Error downloading image:', err);
                    }
                }));

                // 成功时解析返回 itemInfo
                resolve(itemInfo);
            } catch (err) {
                reject('Error fetching data: ' + err.message);
            }
        });

        // 监听错误
        pythonProcess.stderr.on('data', (data) => {
            console.error('Error:', data.toString());
            reject('Python process error: ' + data.toString());
        });

        // 监听进程关闭
        pythonProcess.on('close', (code) => {
            console.log(`Python process exited with code ${code}`);
            if (code !== 0) {
                reject(`Python process exited with error code ${code}`);
            }
        });
    });
};

module.exports = getAccess