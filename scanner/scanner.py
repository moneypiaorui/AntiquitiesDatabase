import cv2
import sys
import numpy as np
from pyzbar import pyzbar
import json

# # 定义图片路径
# img_path= "server/uploads/123.jpg"
# img=cv2.imread(img_path)

# 从标准输入读取图像数据
img_data = sys.stdin.buffer.read()
# 将数据转换为 NumPy 数组
nparr = np.frombuffer(img_data, np.uint8)
# 解码图像
img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# 转换为灰度图
gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# 解码条形码
barcodes=pyzbar.decode(gray)

for barcode in barcodes:
    # 获取条形码的位置和大小
    (x, y, w, h) = barcode.rect

    # 在视频帧中绘制一个绿色矩形框，标记出条形码的位置
    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # 解码条形码数据为 UTF-8 格式
    barcodeData = barcode.data.decode("utf-8")

    # 获取条形码的类型（如 QR_CODE, CODE128 等）
    barcodeType = barcode.type

    # 准备要在视频帧上显示的文本内容
    text = "{}".format(barcodeData)

    # 打印扫描结果到控制台
    # print(f"[扫描结果] 条形码类别： {0} 内容： {1}".format(barcodeType, barcodeData))
    print(json.dumps({'message':'succeed','codeType':barcodeType,'code':barcodeData}))

if len(barcodes)<=0:
    print(json.dumps({'message':'no_codebar'}))

# cv2.imshow('img', img)
# cv2.waitKey(0)
cv2.destroyAllWindows()