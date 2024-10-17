const sqlite3 = require('sqlite3').verbose();

// 连接到 SQLite 数据库
const db = new sqlite3.Database('crawler/item.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
        return;
    }
    console.log("Connected to the SQLite item database.");
});

// 创建文件表
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS item (
        url TEXT,
        pid INTEGER PRIMARY KEY,
        c0 TEXT,
        c1 TEXT,
        c2 TEXT,
        c3 TEXT,
        c4 TEXT,
        c5 TEXT,
        text TEXT
      )`);
});



module.exports = db;