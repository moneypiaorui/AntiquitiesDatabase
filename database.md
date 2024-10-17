# 数据库结构文档

本项目使用 SQLite 数据库来存储用户信息、文物数据、历史记录和收藏信息。以下是数据库中的表格结构:

## 用户数据库 (user.db)

### users 表

存储用户账户信息。

| 列名 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键,自增 |
| username | TEXT | 用户名,唯一 |
| password | TEXT | 加密后的密码 |
| userRole | TEXT | 用户角色 |

### historyRecords 表

存储用户的浏览历史记录。

| 列名 | 类型 | 说明 |
|------|------|------|
| id | TEXT | 主键,格式为 "pid_timestamp" |
| username | TEXT | 外键,关联 users 表的 username |
| pid | TEXT | 文物ID |
| timestamp | INTEGER | 浏览时间戳 |

### favorites 表

存储用户的收藏记录。

| 列名 | 类型 | 说明 |
|------|------|------|
| id | INTEGER | 主键,自增 |
| username | TEXT | 外键,关联 users 表的 username |
| pid | TEXT | 文物ID |
| timestamp | INTEGER | 收藏时间戳 |

## 文物数据库 (item.db)

### item 表

存储文物信息。

| 列名 | 类型 | 说明 |
|------|------|------|
| url | TEXT | 文物图片URL |
| pid | INTEGER | 主键,文物ID |
| c0 | TEXT | 分类层级1 |
| c1 | TEXT | 分类层级2 |
| c2 | TEXT | 分类层级3 |
| c3 | TEXT | 分类层级4 |
| c4 | TEXT | 分类层级5 |
| c5 | TEXT | 分类层级6 |
| text | TEXT | JSON格式的文物描述,包含 title 和 describe |

## 注意事项

1. 用户密码在存储前使用 bcrypt 进行加密。
2. historyRecords 表的 id 使用 "pid_timestamp" 格式作为唯一标识符。
3. item 表的 text 列存储 JSON 格式的数据,包含文物的标题和描述。
4. 所有涉及用户的表格都使用 username 作为外键,关联到 users 表。
5. 数据库启用了外键约束,确保数据完整性。

## 数据库连接

- 用户相关的数据存储在 `user.db` 文件中。
- 文物相关的数据存储在 `crawler/item.db` 文件中。

在应用程序中,使用 `sqlite3` 模块连接到这些数据库文件。连接示例可以在 `server/components/database.js` 和 `server/components/itemDB.js` 中找到。
