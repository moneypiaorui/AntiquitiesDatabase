const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// 创建缓存目录
const cacheDir = path.join(__dirname, '..', 'cache');
if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
}

// 生成缓存文件名
const getCacheFileName = (url) => {
    const encodedUrl = encodeURIComponent(url);
    const timestamp = Date.now();
    return `${encodedUrl}_${timestamp}`;
};

// 清理旧的缓存文件
const cleanupCache = () => {
    const files = fs.readdirSync(cacheDir);
    const now = Date.now();
    files.forEach(file => {
        const filePath = path.join(cacheDir, file);
        const stats = fs.statSync(filePath);
        const fileAge = (now - stats.mtime.getTime()) / 1000; // 文件年龄（秒）
        if (fileAge > 3600) { // 如果文件超过1小时
            fs.unlinkSync(filePath);
        }
    });
};

router.get('/image', async (req, res) => {
    const imageUrl = req.query.url;
    if (!imageUrl) {
        return res.status(400).send('No image URL provided');
    }

    const cacheFileName = getCacheFileName(imageUrl);
    const cachePath = path.join(cacheDir, cacheFileName);

    // 检查缓存
    const cacheFiles = fs.readdirSync(cacheDir);
    const existingCacheFile = cacheFiles.find(file => file.startsWith(encodeURIComponent(imageUrl)));
    if (existingCacheFile) {
        const existingCachePath = path.join(cacheDir, existingCacheFile);
        const stats = fs.statSync(existingCachePath);
        const fileAge = (Date.now() - stats.mtime.getTime()) / 1000; // 文件年龄（秒）
        if (fileAge < 3600) { // 如果缓存不超过1小时
            return res.sendFile(existingCachePath);
        } else {
            // 删除过期的缓存文件
            fs.unlinkSync(existingCachePath);
        }
    }

    try {
        // 从原始URL获取图片
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'];

        // 保存到缓存
        fs.writeFileSync(cachePath, response.data);

        // 设置响应头
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=3600'); // 浏览器缓存1小时

        // 发送图片数据
        res.send(response.data);

        // 清理旧的缓存文件
        cleanupCache();
    } catch (error) {
        console.error('Error proxying image:', error);
        res.status(500).send('Error proxying image');
    }
});

module.exports = router;
