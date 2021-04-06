/**使用本脚本的同学请填写邀请码：
    * 抖音极速版邀请码：87429262 （推荐）
    * 快手极速版邀请码：663409711   （推荐）
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608   （2021年可能没了）
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/

auto.waitFor()

let times = rawInput("请输入要自动刷的视频次数：", "500")  //用户设置刷视频的个数，默认100
launchApp("抖音极速版");
console.show()  //显示悬浮窗（需要先打开悬浮窗权限）
sleep(10000)    //等待应用打开
console.log("准备就绪！")

for (var i = 0; i < times; ++i) {
    nextVideo(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
    u = i + 1
    console.log("总任务量：" + times + ";已完成：" + u)

    /*因广告金币不能领取只领宝箱金币 */
 
    if (textContains("开宝箱").exists()) {
        id("b9b").click()//领宝箱按钮id不定时随机变化，失效请修改
        className("android.view.View").clickable(true).depth(12).findOne().click()
        dytimes(3000, 5000)
        back();        
    }

}
console.hide()
home();//回到首页
function xianshi() {
    if (text("限时任务赚金币").exists()) {
        className("android.view.View").text("去领取").findOne().click()
        sleep(35 * 1000)
        back();
    }
}

function boxs() {
    if (className("android.widget.TextView").text("开宝箱得金币").exists()) {
        className("android.view.View").clickable(true).depth(12).findOne().click()
        dytimes(3000, 5000)
        className("android.widget.TextView").text("看广告视频再赚").findOne().parent().click()
        sleep(35 * 1000)
        back();
    }
}

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
    * 抖音极速版邀请码：87429262 （推荐）
    * 快手极速版邀请码：663409711   （推荐）
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608   （2021年可能没了）
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/

