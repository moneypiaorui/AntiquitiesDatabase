// authMiddleware.js

const jwt = require('jsonwebtoken');
const db = require("./database")

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: '无访问权限' });

    try {
        const decoded = jwt.verify(token, 'secret_key');
        const username = decoded.username;

        // 验证用户是否存在于数据库中
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
            if (err) {
                console.error('验证用户时出错:', err.message);
                return res.status(500).json({ message: '服务器错误' });
            }
            if (!row) {
                return res.status(401).json({ message: '无效的用户' });
            }
            // 用户存在，将用户信息添加到请求对象中
            req.username = username;
            req.userId = row.id;
            next();
        });
    } catch (error) {
        res.status(401).json({ message: '无效的token' });
    }
};

module.exports = authMiddleware;
