## api介绍

### 搜索所有的机制银币api
http://data.shouxi.com/item_list.php?k=&cid=1&c_cid=1&c1_cid=0&c2_cid=0&c3_cid=0&c4_cid=0&c5_cid=0&crid=0&caid=0&o_p=&per_page=100&p=1&list_type=0
- p 字段是页数
- list_type字段是数据展示类型，0/1,没啥用
- per_page是每页多少个数据
- c_cid字段是顶级分类：机制银币/机制金币/机制铜币......

### 该请求是点击拍品分类第一栏获取的栏目详细信息，包括所有子类信息，以树形结构存储
http://data.shouxi.com/json.php?a=cate_p&cid=9611
- cid字段为根


### 搜索请求
http://data.shouxi.com/item_list.php?a=s&per_page=&cid=9620&c_cid=1&c1_cid=9611&c2_cid=9612&c3_cid=9619&c4_cid=9620&c5_cid=0&crid=0&caid=0&list_type=1&k=
- c_cid是银币金币分类的字段
- c1_cid为上个请求的cid字段
- c2~c5由上个请求解析后获得


### 具体每个拍品的页面
http://data.shouxi.com/item.php?id=1235
- id字段为拍品id
- 获取到的html内 id="#item1_img"的img标签 为目标图片
- div.flex-row > div.leftSide > p > span > a 的内容就是分类(css选择器)
- article.article > p.flex-row-center > span 的內容是拍品描述
