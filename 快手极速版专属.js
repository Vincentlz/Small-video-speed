/**使用本脚本的同学请填写邀请码：
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608
    * 抖音极速版邀请码：87429262
    * 快手极速版邀请码：663409711
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/

auto.waitFor()
var target;

let times = rawInput("请输入要自动刷的视频次数：", "500")  //用户设置刷视频的个数，默认100
launchApp("快手极速版");
console.show()  //显示悬浮窗（需要先打开悬浮窗权限）
sleep(10000)    //等待应用打开
console.log("准备就绪！")

id("left_btn").click()//点击菜单
dytimes(2000, 4000)
drawingOrder("2").id("container").click()// drawingOrder("2") 点击去赚钱
dytimes(2000, 4000)

welfare();
liveds();
videos();

console.hide()
home();//回到首页

/**-------------------------10次福利金币-------------------------------- */
function welfare() {
    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 2), 150)
    dytimes(3000, 5000);
    for (let i = 1; i <= 10; i++) {
        if (text("福利 领金币").findOnce()) {
            text("福利 领金币").click();
            console.log("第" + i + "次广告福利")
            //等待广告关闭按钮点击
            id("video_close_icon").waitFor()
            id("video_close_icon").click()
            dytimes(3000, 5000);
        } else if (text("福利").findOnce()) {
            text("福利").click();
            console.log("第" + i + "次广告福利")
            //等待广告关闭按钮点击
            id("video_close_icon").waitFor()
            id("video_close_icon").click()
            dytimes(3000, 5000);
        } else if (text("明日再来").findOnce()){
            console.log("10次广告福利结束啦！");
            break
        }
    }
}

/**-------------------------10次直播金币-------------------------------- */
function liveds() {
    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
    dytimes(3000, 5000);
    console.log("开始看直播10次咯！")
    if (className("android.view.View").text("今日已成功领取直播奖励金币").exists()) {
        console.log("10次直播福利结束啦！二次运行");
        back()
    }
    else {
        text("看直播").click()
        for (let i = 1; i <= 2; i++) {
            console.log("第" + i + "次直播奖励")
            sleep(32 * 1000)
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
            if (text("close_btn").exists()) {
                text("close_btn").click()
                console.log("有关注主播弹出");
                // id("close_btn").waitFor()
            } else if (i == 2 || text("退出").exists()) {
                console.log("10次直播福利结束啦！里面");
                back();
                dytimes(1000, 3000);
                back();
                dytimes(1000, 3000);
                back();
            }
        }
    }
}

/**-------------------------按需刷小视频-------------------------------- */
function videos() {
    for (var i = 0; i < times; ++i) {
        nextVideo(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
        u = i + 1
        console.log("总任务量：" + times + ";已完成：" + u)
        /*随机回看 */
        j = random(1, 30)
        if (j == 1) {
            lookBack()
        }
    }
}

/**-------------------------各种方法-------------------------------- */
function nextVideo(x1, y1, x2, y2, duration) {
    swipe(x1, y1, x2, y2, duration)
    delayTime = random(8000, 12000)
    sleep(delayTime)    //在视频停留8-12秒
}

/*随机往回滑动 */
function lookBack() {
    let back = random(1, 20)
    if (back == 1) {
        console.log("开始往回看一个视频")
        swipe(device.width / 2, device.height * (1 / 4), device.width / 2, device.height * (8 / 9), 150)
        sleep(random(10000, 15000))
    }
}

/*向下滑动两个 在向回滑动之后执行 */
function nextTwo() {
    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
    sleep(random(10000, 15000))
}

function dytimes(time1, time2) {
    delayTime = random(time1, time2)
    sleep(delayTime)    //在视频停留8-12秒
}

/**使用本脚本的同学请填写邀请码：
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608
    * 抖音极速版邀请码：87429262
    * 快手极速版邀请码：663409711
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/
