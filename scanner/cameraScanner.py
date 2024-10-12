import cv2  # 导入 OpenCV 库，用于图像处理和计算机视觉
from pyzbar import pyzbar  # 导入 pyzbar 库，用于解码条形码和二维码

def decodeDisplay(video):
    # 将视频帧转换为灰度图像，以便更好地处理条形码和二维码
    gray = cv2.cvtColor(video, cv2.COLOR_BGR2GRAY)

    # 使用 pyzbar 解码灰度图像中的条形码
    barcodes = pyzbar.decode(gray)

    # 遍历所有识别到的条形码
    for barcode in barcodes:
        # 获取条形码的位置和大小
        (x, y, w, h) = barcode.rect

        # 在视频帧中绘制一个绿色矩形框，标记出条形码的位置
        cv2.rectangle(video, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # 解码条形码数据为 UTF-8 格式
        barcodeData = barcode.data.decode("utf-8")

        # 获取条形码的类型（如 QR_CODE, CODE128 等）
        barcodeType = barcode.type

        # 准备要在视频帧上显示的文本内容
        text = "{}".format(barcodeData)

        # 在条形码上方绘制解码后的文本
        cv2.putText(video, text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        # 打印扫描结果到控制台
        print("[扫描结果] 条形码类别： {0} 内容： {1}".format(barcodeType, barcodeData))

    # 显示带有条形码标记和文本的视频帧
    cv2.imshow("cam", video)


def detect():
    # 创建一个名为 "cam" 的窗口，窗口大小可调
    cv2.namedWindow("test", cv2.WINDOW_NORMAL)

    # 打开默认摄像头（设备索引为 0）
    cam = cv2.VideoCapture(1)

    # 进入循环以不断捕获视频帧
    while True:
        # 读取摄像头的当前帧
        ret, frame = cam.read()

        # 如果未成功获取视频帧，则打印错误信息并退出循环
        if not ret:
            print("无法获取视频帧")
            break

        # 调用解码函数处理当前帧
        decodeDisplay(frame)

        # 检测键盘输入，如果按下 'ESC' 键（ASCII 码 27），则退出循环
        if (cv2.waitKey(5) == 27):
            break

    # 释放摄像头资源
    cam.release()

    # 关闭所有 OpenCV 创建的窗口
    cv2.destroyAllWindows()


if __name__ == '__main__':
    # 程序入口点，调用检测函数开始运行
    detect()
