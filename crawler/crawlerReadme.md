# 爬虫使用
- getDataAll.py通过id检索所有的拍品,单独提取jizhiyinbi类；id范围测试得约为0~1296000，部分id不存在
- getData3year.py通过搜索页面检索近三年的机制银币（三年是非会员限制），通过设置第一个get请求的per_page字段来改变获取量，比如1000就是获取最近1000个藏品。注意机制银币拍品数量大约是100*585个

## nodejs运行
1. 安装nodejs,配置环境变量
2. 在crawler文件夹下打开终端/命令行/cmd,运行`npm install`安装依赖
3. 输入`node getDataAll.js`or`node getData3year.js`启动脚本

# 待办
- [ ] 有些页面有两张图,暂时只能获取一张
- [ ] 详细信息获取和存储

# api介绍

## 搜索所有的机制银币api
http://data.shouxi.com/item_list.php?k=&cid=1&c_cid=1&c1_cid=0&c2_cid=0&c3_cid=0&c4_cid=0&c5_cid=0&crid=0&caid=0&o_p=&per_page=100&p=1&list_type=0
- p 字段是页数
- list_type字段是数据展示类型，0/1,没啥用
- per_page是每页多少个数据

## 该请求是点击拍品分类第一栏获取的栏目详细信息，包括所有子类信息，以树形结构存储
http://data.shouxi.com/json.php?a=cate_p&cid=9611
- cid字段为根


## 搜索请求
http://data.shouxi.com/item_list.php?a=s&per_page=&cid=9620&c_cid=1&c1_cid=9611&c2_cid=9612&c3_cid=9619&c4_cid=9620&c5_cid=0&crid=0&caid=0&list_type=1&k=
- c_cid是银币金币分类的字段
- c1_cid为上个请求的cid字段
- c2~c5由上个请求解析后获得


## 具体每个拍品的页面
http://data.shouxi.com/item.php?id=1235
- id字段为拍品id
- 获取到的html内 id="#item1_img"的img标签 为目标图片
- div.flex-row > div.leftSide > p > span > a 的内容就是分类(css选择器)
- article.article > p.flex-row-center > span 的內容是拍品描述