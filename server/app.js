const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const getAccess = require(path.join(__dirname, 'getAccess'));

const app = express();
const PORT = 5000;

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
app.post('/api/upload', cors(), upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const imgBuffer = req.file.buffer;

    const savedFilePath = path.join(uploadsDir, req.file.originalname);
    fs.writeFile(savedFilePath, imgBuffer, (err) => {
        if (err) {
            console.error("Error saving file:", err);
        }
    });

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    const sendProgress = (progress) => {
        res.write(`data: ${JSON.stringify({ progress })}\n\n`);
    };

    getAccess(imgBuffer, sendProgress)
        .then(accessRes => {
            res.write(`data: ${JSON.stringify({ message: 'success', itemInfo: accessRes })}\n\n`);
            res.end();
        })
        .catch(error => {
            res.write(`data: ${JSON.stringify({ message: 'failed', error: error.toString() })}\n\n`);
            res.end();
        });
});

app.use(bodyParser.json());

// 路由
app.use('/api/users', require('./router/users'));
app.use('/api/artifacts', require('./router/artifacts'));
app.use('/api/user-actions', require('./router/userActions'));
app.use('/api/proxy', require('./router/proxy')); // 添加新的代理路由

// 修改 HTTP 服务器的创建逻辑
const httpServer = http.createServer(app);

// 启动 HTTP 服务器 
httpServer.listen(PORT, () => {
    console.log(`HTTP Server is running on http://localhost:${PORT}`);
});

// 设置一个全局的进度处理函数
app.set('progressHandler', null);
