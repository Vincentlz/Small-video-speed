auto.waitFor();//判断和等待开启无障碍
let see_count = rawInput('请输入滑动次数', '1000');//手动输入滑动次数默认是1000次。
var appName = rawInput("选择需要刷的小视频：", "快手极速版");//选择需要刷的小视频(抖音极速版、火山极速版、快手极速版等)
app.launchApp(appName);//直接输入要打开的小视频名字
sleep(20000);//等待splash时间
console.show(); //开启日志（悬浮窗权限）
for (var i = 1; i < see_count; i++) {
    //toast("小视频滑动" + i + "次" + "总计:" + see_count + "次");
    console.log("小视频已滑动" + i + "次" + "总计:" + see_count + "次");
    slideScreenDown(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150);
    randomUpSildeScreen();//模仿人类随向上滑动一次，表示对这个视频有兴趣
    randomDownSildeScreen();//模仿人类随连续下滑2次，表示对当前视频无兴趣
    
    clickScreen();//模仿人类随随机暂停

}
//关闭当前程序
home();//回到首页
exits();//退出js脚本

/**
 * 屏幕向下滑动并延迟8至12秒
 */
function slideScreenDown(startX, startY, endX, endY, pressTime) {
    swipe(startX, startY, endX, endY, pressTime);
    let delayTime = random(8000, 12000);
    sleep(delayTime);//模仿人类随机时间
}

/**
 *随机点击屏幕/视频（暂停查看视频）
 */
function clickScreen() {
    index = random(1, 50);
    if (index == 30) {
        var x = device.width - device.width * 0.2;
        var y = device.height - device.height * 0.2;
        toastLog("点击屏幕" + x + ":" + y);
        let clickResult = click(x, y);
        toastLog(clickResult);
    }
}

/**
 * 随机上滑（防止被判定是机器）上滑后停留时间至少是10S，造成假象表示是对内容感兴趣
 * 点赞和关注先不搞。
 */
function randomUpSildeScreen() {
    let randomIndex = random(1, 50);
    if (randomIndex == 1) {
        console.log("随机上滑被执行了!!!");
        pressTime = random(200, 500);
        swipe(device.width / 2, 500, device.width / 2, device.height - 200, 300);
        delayTime = random(10000, 15000);
        sleep(delayTime);
    }
}

/**
 * 连续下滑对上一个无兴趣
 * 其实得和上滑做个排他，既然无兴趣不要在上滑
 */
function randomDownSildeScreen() {
    let randomIndex = random(1, 50);
    if (randomIndex == 50) {
        console.log("连续下滑被执行了");
        swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
        sleep(1000);
        swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
        delayTime = random(8000, 10000);
        sleep(delayTime);
    }
}
