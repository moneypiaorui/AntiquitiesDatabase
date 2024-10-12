const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const db = require('../components/itemDB');  // 修改这里使用 itemDB
const authMiddleware = require('../components/authMiddleware');

// 公共路由不需要 authMiddleware
router.get('/classification', async (req, res) => {
    try {
        const filePath = path.join(__dirname, '..', '..', 'crawler', 'classification.json');
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error('读取 classification.json 文件时出错:', error);
        res.status(500).json({ message: "无法读取分类数据" });
    }
});

// 搜索物品
router.get('/searchItems', (req, res) => {
    const { c0, c1, c2, c3, c4, c5, page = 1, limit = 10 } = req.query;

    const conditions = [c0, c1, c2, c3, c4, c5];
    
    // 检查是否所有条件都为空
    const allEmpty = conditions.every(condition => condition === undefined || condition === '');
    
    if (allEmpty) {
        // 如果所有条件都为空，返回空数组
        return res.json([]);
    }

    let query = 'SELECT url, text, pid FROM item WHERE 1=1';
    const params = [];

    conditions.forEach((condition, index) => {
        if (condition !== undefined && condition !== '') {
            query += ` AND c${index} = ?`;
            params.push(condition);
        }
    });

    query += ` LIMIT ? OFFSET ?`;
    params.push(limit, (page - 1) * limit);

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('查询数据库时出错:', err.message);
            return res.status(500).json({ message: "数据库查询错误" });
        }

        const results = rows.map(row => ({
            url: row.url,
            title: JSON.parse(row.text).title,
            pid: row.pid
        }));

        res.json(results);
    });
});

// 不需要认证的路由
router.get('/search', (req, res) => {
    const { id } = req.query;
    
    db.get(`SELECT * FROM item WHERE pid = ?`, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: "数据库查询错误" });
        }
        if (!row) {
            return res.status(404).json({ message: "未找到文物" });
        }
        const { url, text, pid } = row;
        const { title, describe } = JSON.parse(text);
        res.json({ pid, img: url, title, text: describe });
    });
});

module.exports = router;
