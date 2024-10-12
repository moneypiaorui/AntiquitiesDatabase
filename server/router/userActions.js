const express = require('express');
const router = express.Router();
const authMiddleware = require('../components/authMiddleware');
const db = require('../components/database');

// 所有路由都需要认证
router.use(authMiddleware);

// 添加历史记录
router.post('/record', (req, res) => {
    const { pid, timestamp } = req.body;
    const { username } = req;

    // 使用 pid 和时间戳作为唯一标识符
    const recordId = `${pid}_${timestamp}`;

    // 直接插入新记录，不检查是否存在最近的记录
    const insertQuery = 'INSERT OR REPLACE INTO historyRecords (id, username, pid, timestamp) VALUES (?, ?, ?, ?)';
    db.run(insertQuery, [recordId, username, pid, timestamp], function(err) {
        if (err) {
            console.error('添加历史记录时出错:', err.message);
            return res.status(500).json({ message: "添加历史记录失败" });
        }
        res.json({ message: "Record added successfully", id: recordId });
    });
});

// 获取历史记录
router.get('/history', (req, res) => {
    const { username } = req;
    
    const query = 'SELECT * FROM historyRecords WHERE username = ? ORDER BY timestamp DESC';
    db.all(query, [username], (err, rows) => {
        if (err) {
            console.error('获取历史记录时出错:', err.message);
            return res.status(500).json({ message: "获取历史记录失败" });
        }
        res.json(rows);
    });
});

// 添加收藏
router.post('/favorite', (req, res) => {
    const { pid } = req.body;
    const { username } = req;

    // 首先检查是否已经收藏
    db.get('SELECT * FROM favorites WHERE username = ? AND pid = ?', [username, pid], (err, row) => {
        if (err) {
            console.error('检查收藏时出错:', err.message);
            return res.status(500).json({ message: "检查收藏失败" });
        }
        
        if (row) {
            // 已经收藏过了
            return res.status(409).json({ message: "已经收藏过这个文物" });
        }

        // 如果没有收藏过，则添加收藏
        const timestamp = Date.now();
        const query = 'INSERT INTO favorites (username, pid, timestamp) VALUES (?, ?, ?)';
        db.run(query, [username, pid, timestamp], function(err) {
            if (err) {
                console.error('添加收藏时出错:', err.message);
                return res.status(500).json({ message: "添加收藏失败" });
            }
            res.json({ message: "收藏成功", id: this.lastID });
        });
    });
});

// 获取收藏列表
router.get('/favorite', (req, res) => {
    const { username } = req;
    
    const query = 'SELECT * FROM favorites WHERE username = ? ORDER BY timestamp DESC';
    db.all(query, [username], (err, rows) => {
        if (err) {
            console.error('获取收藏列表时出错:', err.message);
            return res.status(500).json({ message: "获取收藏列表失败" });
        }
        res.json(rows);
    });
});

// 删除收藏
router.delete('/favorite', (req, res) => {
    const { pid } = req.body;
    const { username } = req;

    const query = 'DELETE FROM favorites WHERE username = ? AND pid = ?';
    db.run(query, [username, pid], function(err) {
        if (err) {
            console.error('删除收藏时出错:', err.message);
            return res.status(500).json({ message: "删除收藏失败" });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "收藏不存在或已被删除" });
        }
        res.json({ message: "Artifact removed from favorites" });
    });
});

module.exports = router;
