# API 文档

## 用户管理

### 注册新用户
- **路径**: `/api/users/register`
- **方法**: POST
- **请求体**:
  ```json
  {
    "username": "string",
    "password": "string",
    "userRole": "string"
  }
  ```
- **响应**:
  - 成功: 状态码 200, 消息 "注册成功"
  - 失败: 状态码 409 (用户名已存在) 或 500 (服务器错误)

### 用户登录
- **路径**: `/api/users/login`
- **方法**: POST
- **请求体**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **响应**:
  - 成功: 状态码 200, 返回 JWT token, id 和 username
  - 失败: 状态码 401 (认证失败) 或 409 (用户不存在) 或 500 (服务器错误)

### 验证用户
- **路径**: `/api/users/verify`
- **方法**: GET
- **头部**: 需要包含有效的 JWT token
- **响应**:
  - 成功: 状态码 200, 返回用户名和用户ID
  - 失败: 状态码 401 (未认证)

## 文物管理

### 获取分类信息
- **路径**: `/api/artifacts/classification`
- **方法**: GET
- **响应**: 返回 classification.json 文件的内容

### 搜索物品
- **路径**: `/api/artifacts/searchItems`
- **方法**: GET
- **查询参数**: 
  - `c0`, `c1`, `c2`, `c3`, `c4`, `c5` (可选): 分类条件
  - `page` (可选, 默认为1): 页码
  - `limit` (可选, 默认为10): 每页项目数
- **响应**: 
  - 返回符合条件的物品列表
  - 每个物品包含 url, title, pid

### 获取卡片信息
- **路径**: `/api/artifacts/search`
- **方法**: GET
- **查询参数**: `id`
- **响应**: 返回指定id的物品信息，包含 img, title 和 text

## 历史记录

### 添加历史记录
- **路径**: `/api/user-actions/record`
- **方法**: POST
- **头部**: 需要包含有效的 JWT token
- **请求体**:
  ```json
  {
    "pid": "string",
    "timestamp": "number"
  }
  ```
- **响应**:
  - 成功: 状态码 200, 返回添加的记录 ID
  - 失败: 状态码 500 (服务器错误)

### 获取历史记录
- **路径**: `/api/user-actions/history`
- **方法**: GET
- **头部**: 需要包含有效的 JWT token
- **查询参数**: 
  - `page` (可选, 默认为1): 页码
  - `limit` (可选, 默认为20): 每页项目数
- **响应**: 返回用户的历史记录列表

## 收藏功能

### 添加收藏
- **路径**: `/api/user-actions/favorite`
- **方法**: POST
- **头部**: 需要包含有效的 JWT token
- **请求体**:
  ```json
  {
    "pid": "string"
  }
  ```
- **响应**:
  - 成功: 状态码 200, 返回添加的收藏 ID
  - 已存在: 状态码 409, 消息 "已经收藏过这个文物"
  - 失败: 状态码 500 (服务器错误)

### 获取收藏列表
- **路径**: `/api/user-actions/favorite`
- **方法**: GET
- **头部**: 需要包含有效的 JWT token
- **查询参数**: 
  - `page` (可选, 默认为1): 页码
  - `limit` (可选, 默认为15): 每页项目数
- **响应**: 返回用户的收藏列表

### 删除收藏
- **路径**: `/api/user-actions/favorite`
- **方法**: DELETE
- **头部**: 需要包含有效的 JWT token
- **请求体**:
  ```json
  {
    "pid": "string"
  }
  ```
- **响应**:
  - 成功: 状态码 200, 消息 "Artifact removed from favorites"
  - 失败: 状态码 404 (收藏不存在) 或 500 (服务器错误)

## 文件上传

### 上传文件
- **路径**: `/api/upload`
- **方法**: POST
- **请求体**: 表单数据，包含 'file' 字段
- **响应**: 
  - 成功: 状态码 200, 返回Server-Sent Events (SSE)流
    - 进度更新: 
      ```json
      { "progress": number }
      ```
    - 最终结果:
      ```json
      { 
        "message": "success", 
        "itemInfo": object 
      }
      ```
  - 失败: 
    - 状态码 400 (没有文件上传)
    - 状态码 500 (服务器错误)
    - SSE流中的错误消息:
      ```json
      { 
        "message": "failed", 
        "error": string 
      }
      ```
- **注意**: 
  - 客户端应使用 EventSource 或类似机制来处理SSE流
  - 进度更新会定期发送，直到处理完成
  - 最终的itemInfo对象包含处理后的文物信息

## 图片代理

### 获取代理图片
- **路径**: `/api/proxy/image`
- **方法**: GET
- **查询参数**: `url` (原始图片URL)
- **响应**: 
  - 成功: 返回图片数据，设置适当的Content-Type
  - 失败: 状态码 400 (未提供URL) 或 500 (代理错误)
