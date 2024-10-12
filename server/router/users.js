// users.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../components/database");
const authMiddleware = require('../components/authMiddleware');

const router = express.Router();

// 注册新用户
router.post('/register', (req, res) => {
    const { username, password, userRole } = req.body;
    db.get(`SELECT * FROM users WHERE username = ?`, [username], function (err, row) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (row) {
            res.status(409).json({message:`用户名已存在`});
        } else {
            db.run(`INSERT INTO users (username, password, userRole) VALUES (?, ?, ?)`, [username, bcrypt.hashSync(password, 10), userRole], function (err) {
                if (err) {
                    console.log("注册失败")
                    res.status(500).send(err.message);
                } else {
                    console.log(`user${username}注册成功`);
                    res.status(200).send("注册成功");
                }
            });
        }
    })
});

// 用户登录
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT * FROM users WHERE username = ?`, [username], function (err, row) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (!row) {
            res.status(409).json({message:`用户不存在`});
        } else {
            if (!bcrypt.compareSync(password, row.password)) {
                return res.status(401).json({ message: '用户名或密码错误' });
            }
            console.log(`user${username}登录成功`);
            const token = jwt.sign({ id: row.id, username: row.username }, 'secret_key', { expiresIn: '24h' });
            res.json({ token, id: row.id, username: row.username });
        }
    })
});

// 验证用户
router.get('/verify', authMiddleware, (req, res) => {
    res.status(200).json({username: req.username, id: req.userId});
    console.log("用户"+req.username+"自动登录")
});

module.exports = router;
