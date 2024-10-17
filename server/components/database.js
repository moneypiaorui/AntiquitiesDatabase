const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

// 连接到 SQLite 数据库
const db = new sqlite3.Database('user.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
        return;
    }
    console.log("Connected to the SQLite user database.");
});

//启用外键约束
db.run("PRAGMA foreign_keys = ON");

// 创建文件表
db.serialize(async () => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT, userRole TEXT)");
    
    // 检查是否存在管理员账户，如果不存在则创建
    db.get(`SELECT * FROM users WHERE username = "admin"`, async function (err, row) {
        if (!row) {
            try {
                // 使用 bcrypt 加密密码
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash("admin", saltRounds);
                
                db.run(`INSERT INTO users (username, password, userRole) VALUES (?, ?, ?)`, 
                    ["admin", hashedPassword, "admin"], 
                    (err) => {
                        if (err) {
                            console.error("Error creating admin user:", err.message);
                        } else {
                            console.log("Admin user created successfully");
                        }
                    }
                );
            } catch (error) {
                console.error("Error hashing admin password:", error);
            }
        }
    });
    
    // 历史记录表 - 更新结构
    db.run("CREATE TABLE IF NOT EXISTS historyRecords (id TEXT PRIMARY KEY, username TEXT, pid TEXT, timestamp INTEGER, FOREIGN KEY(username) REFERENCES users(username))");
    
    // 收藏记录表
    db.run("CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY, username TEXT, pid TEXT, timestamp INTEGER, FOREIGN KEY(username) REFERENCES users(username))");
});

module.exports = db;
