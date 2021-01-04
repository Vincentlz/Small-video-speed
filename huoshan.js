/**使用本脚本的同学请填写邀请码：
    * 抖音极速版邀请码：87429262 （推荐）
    * 快手极速版邀请码：663409711   （推荐）
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608   （2021年可能没了）
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/
auto.waitFor()

toast('准备打开火山！')
console.show()
console.log('准备就绪！')
// =============  常量+全局变量定义 START  ================

var g_PackageName = 'com.ss.android.ugc.livelite';

var gCounter = 0;//计数器

var ctl;

// =============  常量+全局变量定义 END  ================

if (currentPackage() !== g_PackageName) {

    sleep(6000)

    app.launchApp('火山极速版')

}

if (id('xa').exists()) {

    id('xa').text('红包').findOnce().parent().click();

    getWatchAdVideoCoin();

}


/**

 * 看视频赚海量金币，每天领20次

 */

function getWatchAdVideoCoin() {

    // 20次签到领金币

    if (By.text('领100金币').exists() || By.text('去赚钱').exists()) {

        ctl = By.text('领100金币') || By.text('去赚钱');

        sleep(1000);

        while (gCounter < 20) {

            ctl.click();
            console.log('20ci==:' + gCounter)

            sleep(random(10, 15) * 1000);

            text('关闭广告').waitFor();

            text('关闭广告').click();

            sleep(1000);

            if (text('去赚钱').exists()) {

                text('去赚钱').click();

                sleep(random(15, 30) * 1000);

                text('关闭广告').waitFor();

                text('关闭广告').click();

                sleep(1000);

            }

            gCounter++;

        }

        gCounter = 0

    }

}

if (text('开宝箱得金币').exists()) {

    text('开宝箱得金币').click();

    sleep(random(5, 8) * 100);

    if (textStartsWith('看视频').exists()) {

        var btn = textStartsWith('看视频').findOnce();

        toast('还没有写看视频按钮')

        if (btn) btn.click();

        // text('看视频 金币翻8倍').click();

    }

    sleep(1000);

}

// 点击首页视频

id('xb').click();

while (gCounter < random(20000, 50000)) {
    console.log('shiping:' + gCounter)

    let x1 = random(device.width * 0.2, device.width * 0.3);

    let y1 = device.height * 0.8

    let x2 = random(device.width * 0.2, device.width * 0.3);

    let y2 = device.height * 0.1

    swipe(x1, y1, x1, y2, random(3, 6) * 100);

    k = gCounter < random(20, 50)
    console.log(k)
    console.log(random(20, 50))
    u = gCounter + 1
    console.log("滑动次数：" + u)

    sleep(random(4, 8) * 1000)

    if (id('a3n').exists()) {

        toast('看广告领取')
        u = gCounter + 1
        console.log("随机广告次数：" + u)

        text('领取').waitFor();

        // id('a3c').click();
        // text('领取').click();
        click(90,1397,210,1517)
        sleep(random(1, 3) * 1000)

    }

    // 九宫格摇奖

    else if (className('android.widget.Image').textStartsWith('coin_').exists()) {

        ctl = className('android.view.View').textStartsWith('剩余').findOne().parent();

        ctl.click();

        u = gCounter + 1
        console.log("九宫格次数：" + u)
        id('xb').click();
        sleep(random(3, 5) * 1000)
        id('xb').click();
    }

    else {

        randomHeart()

        randomFollow()

    }

    gCounter++

}

/**随机点赞并休息一秒 */

function randomHeart() {

    index = random(1, 100)

    if (index == 66) {

        var target = id('ob').findOnce();

        if (target == null) {

            return

        }

        target.click()

        sleep(1000)

    }

}

/**

 * 随机关注

 */

function randomFollow() {

    index = random(1, 80)

    if (index == 6) {

        var target = id('ov').findOnce();

        if (target == null) {

            return

        }

        target.click()

        sleep(1000)

    }

}

function autoComment() {

    content = '666';

    id('lm').findOnce().click();

    sleep(1000); //阻塞下面的动作

    // b = id('pz').findOnce().bounds();//获取评论按钮的rect

    // click(b.centerX(), b.centerY());

    setText(content);

    sleep(1000);

    click(b.centerX(), b.centerY());

    sleep(1000);

    click(device.width - 80, b.centerY());

}

// ****************************************************

// HELPER 

// ****************************************************

function Helper() {

    /**

     * 往下滚动,看下面的,模拟手势从下往上

     * @param {int} yStartPos 指定移动距离

     * @param {int} distance 指定移动距离

     */

    this.swipeDown = function (yStartPos, distance) {

        var x1, y1, x2, y2;

        var minX = parseInt(device.width * 0.4), maxX = parseInt(device.width * 0.6);

        x1 = random(minX, maxX);

        x2 = random(minX, maxX);

        if (yStartPos && yStartPos > 0) {

            y1 = yStartPos;

        } else {

            y1 = 900 + random(200, 600);

        }

        if (distance && distance > 0) {

            y2 = y1 - distance;

        } else {

            y2 = y1 - random(400, 800);

        }

        swipe(x1, y1, x2, y2, random(3, 6) * 100);

    };

}
/**使用本脚本的同学请填写邀请码：
    * 抖音极速版邀请码：87429262 （推荐）
    * 快手极速版邀请码：663409711   （推荐）
    * 今日头条极速版邀请码：1181369091  （暂不适用）
    * 火山极速版邀请码：258239608   （2021年可能没了）
 * 谢谢大家！支持作者继续开发。本插件完全免费，仅用于学习
 * 请勿用于非法用途！
*/
