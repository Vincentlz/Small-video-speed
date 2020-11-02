/**使用本脚本的同学请填写邀请码：
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608
    * 抖音极速版邀请码：87429262
    * 快手极速版邀请码：663409711
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/
auto.waitFor()

let times = rawInput("请输入要自动刷的视频次数：", "100")  //用户设置刷视频的个数，默认100

console.show()  //显示悬浮窗（需要先打开悬浮窗权限）

var appName = rawInput("选择需要刷的小视频：", "快手极速版");//选择需要刷的小视频(抖音极速版、火山极速版、快手极速版等)
launchApp(appName);
sleep(10000)    //等待应用打开
console.log("准备就绪！")
toast("ready!")


/*核心部分开始*/
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
/*核心部分结束 */
/*退出程序 */
console.hide()
home();//回到首页
/**--------------- */

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

/**使用本脚本的同学请填写邀请码：
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608
    * 抖音极速版邀请码：87429262
    * 快手极速版邀请码：663409711
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/
