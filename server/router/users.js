// users.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../components/database");
const authMiddleware = require('../components/authMiddleware');

const router = express.Router();

// 注册新用户
router.post('/register', async (req, res) => {
    const { username, password, userRole } = req.body;
    try {
        const existingUser = await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (existingUser) {
            return res.status(409).json({message: `用户名已存在`});
        }

        // 使用 bcrypt 加密密码
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await new Promise((resolve, reject) => {
            db.run(`INSERT INTO users (username, password, userRole) VALUES (?, ?, ?)`, [username, hashedPassword, userRole], function (err) {
                if (err) reject(err);
                else resolve();
            });
        });

        console.log(`user${username}注册成功`);
        res.status(200).send("注册成功");
    } catch (error) {
        console.log("注册失败", error);
        res.status(500).send(error.message);
    }
});

// 用户登录
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (!user) {
            return res.status(409).json({message: `用户不存在`});
        }

        // 使用 bcrypt 比较密码
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: '用户名或密码错误' });
        }

        console.log(`user${username}登录成功`);
        const token = jwt.sign({ id: user.id, username: user.username }, 'secret_key', { expiresIn: '24h' });
        res.json({ token, id: user.id, username: user.username });
    } catch (error) {
        console.error("登录失败", error);
        res.status(500).send(error.message);
    }
});

// 验证用户
router.get('/verify', authMiddleware, (req, res) => {
    res.status(200).json({username: req.username, id: req.userId});
    console.log("用户"+req.username+"自动登录")
});

module.exports = router;
