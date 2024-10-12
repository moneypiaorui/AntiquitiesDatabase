const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const getAccess = require(path.join(__dirname, 'getAccess'))

const app = express();
const PORT = 4000;

// 添加这行来启用 CORS
app.use(cors());

// 设置 multer 存储选项
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// 创建 uploads 文件夹（如果不存在）
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 定义上传接口
app.post('/upload', cors(), upload.single('file'), async (req, res) => {
    // console.log(`receive img`)
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    // 获取图片 Buffer
    const imgBuffer = req.file.buffer;

    // 将 Buffer 写入本地文件
    const savedFilePath = path.join(uploadsDir, req.file.originalname);
    fs.writeFile(savedFilePath, imgBuffer, (err) => {
        // if (err) {
        //     return res.status(500).send('Error saving file.');
        // }

        // res.json({
        //     message: 'File uploaded and saved successfully',
        //     savedFilePath: savedFilePath,
        // });
    });
    try {
        const accessRes = await getAccess(imgBuffer)
        res.json({
            message: 'succeed',
            itemInfo: accessRes
        });
    } catch (error) {
        res.status(500).send(error);
    }

});

app.use(bodyParser.json());

// 路由
app.use('/api/users', require('./router/users'));
app.use('/api/artifacts', require('./router/artifacts'));
app.use('/api/user-actions', require('./router/userActions'));

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
