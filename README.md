# 软开项目：文物数据库

## TimeLine
- <b>10.11</b>
  - 爬虫大体完成
  - 页面设计大体完成
  - 二维码识别完成
- <b>10.12</b>
  - 接收图片，获取条形码，爬取官网图片的代码实现

## 食用
- crawler为爬虫，获取数据存在crawler/database中。使用见 crawlerReadme.md
- 框架设计[预览](https://www.figma.com/design/j27o5VHQvjBkMz9G2uGdEh/Untitled?node-id=0-1&t=va8Xlhoyo5zDSaui-1)
- 二维码识别：cv2和pyzbar

## 环境配置
### python
- 安装conda并且配置环境变量
- 打开终端，输入`conda create -n Antidb`一路yes创建环境
- 输入`conda activate Antidb`切换环境（注意终端开头左侧要有`(base)`字样）
- 输入`pip install opencv-python numpy pyzbar`安装依赖
### nodejs
1. 安装nodejs,配置环境变量
2. 在项目根目录下打开终端/命令行/cmd,运行`npm install`安装依赖
3. 输入`node ./crawler/getDataAll.js`or`node ./crawler/getData3year.js`启动爬虫脚本
4. 若要启动app.js，先切换conda环境`conda activate Antidb`再输入`node ./server/app.js`启动后端服务

## 代码结构
### crawler
- getDataAll.js通过id检索所有的拍品,单独提取jizhiyinbi类；id范围测试得约为0~1296000，部分id不存在
- getData3year.js通过搜索页面检索近三年的机制银币（三年是非会员限制），通过设置第一个get请求的per_page字段来改变获取量，比如1000就是获取最近1000个藏品。注意机制银币拍品数量大约是100*585个
### scanner
- scanner.py通过标准输入读取buffer，先转为npArray，再用opencv读取，回传JSON字符串，结构{'message':'succeed','codeType':1/0,'code':...}
- cameraScanner.py从摄像头扫描二维码/条形码并实时读取
### server
- app.js实现基本后端功能，并在/upload路由中调用getAccess(Buffer)来进行评级比对的相关逻辑
- getAccess.js 导出一个getAccess模块，传入图片的buffer，拉起python并将buffer传递给scanner.py,获取条形码/二维码code，再去*首席收藏家*爬取评级信息，返回Promise对象，没有抛出异常的话resolve(itemInfo)返回物品信息
- uploads/ 暂存用户上传的图片
- compare/ 存放比较的图片方便python程序获取和比较
- public/ 网页静态文件
### uniapp
- pages
  - index
    - index.vue        // 文物数据库页面
  - profile
    - profile.vue      // 我的页面
  - identify
    - identify.vue     // 识别页面
- components
  - Header.vue         // 公共头部
  - Navigation.vue     // 导航
  - FilterPopover.vue  // 筛选弹出层
  - ArtifactCard.vue   // 文物卡片
  - BottomNav.vue      // 底部导航


## 待办
### 爬虫
- [ ] 有些页面有两张图,暂时只能获取一张
- [ ] 详细信息获取和存储
### 算法
- [ ] 实现上传图片和爬取的官网比对，获取匹配率
- [ ] getAccess.js返回比对信息

