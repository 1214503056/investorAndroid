const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();
const appPath = '/Users/caribou.apk';
const platformName = 'Android';

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    callSpec('commons/login.mod.js');

    it('tap: 我的 ( //*[@text="我的"] )', async function(){
        await driver.wait('//*[@text="我的"]', 30000).sendElementActions('tap');
    });

    it('tap: 关注的项目 ( //*[@text="关注的项目"] )', async function(){
        await driver.wait('//*[@text="关注的项目"]', 30000).sendElementActions('tap');
    });

    it('tap: 初心客厅 ( //*[@text="初心客厅"] )', async function(){
        await driver.wait('//*[@text="初心客厅"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="项目详情"], equal, 项目详情', async function(){
        await driver.sleep(300).wait('//*[@text="项目详情"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目详情`));
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 初心客厅', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`初心客厅`));
    });

    it('expect: text, //*[@text="项目FA"], equal, 项目FA', async function(){
        await driver.sleep(300).wait('//*[@text="项目FA"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目FA`));
    });

    it('expect: text, //*[@text="项目信息"], equal, 项目信息', async function(){
        await driver.sleep(300).wait('//*[@text="项目信息"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目信息`));
    });

    it('drag: 712, 1331, 755, 742, 0.81', async function(){
        await driver.sendActions('drag', {fromX: 712, fromY:1331, toX:755, toY:742, duration: 0.81});
    });

    it('drag: 556, 1415, 752, 417, 0.65', async function(){
        await driver.sendActions('drag', {fromX: 556, fromY:1415, toX:752, toY:417, duration: 0.65});
    });

    it('expect: text, //*[@text="BP"], equal, BP', async function(){
        await driver.sleep(300).wait('//*[@text="BP"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`BP`));
    });

    it('expect: text, //*[@text="已关注"], equal, 已关注', async function(){
        await driver.sleep(300).wait('//*[@text="已关注"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`已关注`));
    });

    it('expect: text, //*[@text="对接项目方"], equal, 对接项目方', async function(){
        await driver.sleep(300).wait('//*[@text="对接项目方"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`对接项目方`));
    });

    it('tap: BP ( //*[@text="BP"] )', async function(){
        await driver.wait('//*[@text="BP"]', 30000).sendElementActions('tap');
    });

    it('tap: 保存至邮箱 ( //*[@text="保存至邮箱"] )', async function(){
        await driver.wait('//*[@text="保存至邮箱"]', 30000).sendElementActions('tap');
    });

    it('tap: 取消 ( //*[@resource-id="android:id/button2"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button2"]', 30000).sendElementActions('tap');
    });

    it('tap: 保存至邮箱 ( //*[@text="保存至邮箱"] )', async function(){
        await driver.wait('//*[@text="保存至邮箱"]', 30000).sendElementActions('tap');
    });

    it('tap: 发送 ( //*[@resource-id="android:id/button1"] )', async function(){
        await driver.wait('//*[@resource-id="android:id/button1"]', 30000).sendElementActions('tap');
    });

    it('tap: 消息 ( //*[@text="消息"] )', async function(){
        await driver.wait('//*[@text="消息"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="初心客厅"], equal, 初心客厅', async function(){
        await driver.sleep(300).wait('//*[@text="初心客厅"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`初心客厅`));
    });


    it('tap: 向项目FA直接咨询项目... ( //*[@text="向项目FA直接咨询项目情况..."] )', async function(){
        await driver.wait('//*[@text="向项目FA直接咨询项目情况..."]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 测试两下，呵呵{ESCAPE}', async function(){
        await driver.sendKeys(_(`测试两下，呵呵{ESCAPE}`));
    });

    it('tap: 发送 ( //*[@text="发送"] )', async function(){
        await driver.wait('//*[@text="发送"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="测试两下，呵呵"], equal, 测试两下，呵呵', async function(){
        await driver.sleep(300).wait('//*[@text="测试两下，呵呵"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`测试两下，呵呵`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="商业计划书"], equal, 商业计划书', async function(){
        await driver.sleep(300).wait('//*[@text="商业计划书"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`商业计划书`));
    });

    it('tap: 安排会议 ( //*[@text="安排会议"] )', async function(){
        await driver.wait('//*[@text="安排会议"]', 30000).sendElementActions('tap');
    });

    it('× expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView, equal, 申请排会', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`申请排会`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="商业计划书"], equal, 商业计划书', async function(){
        await driver.sleep(300).wait('//*[@text="商业计划书"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`商业计划书`));
    });

    it('back: ', async function(){
        await driver.back();
    })


    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView, equal, 关注的项目', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`关注的项目`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="我的会议"], equal, 我的会议', async function(){
        await driver.sleep(300).wait('//*[@text="我的会议"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`我的会议`));
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }
};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({},config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let testVars = config.vars;

    let specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    let arrDeviceList = getEnvList() || getDeviceList(platformName);
    if(arrDeviceList.length ===0 ){
        console.log('Search mobile device failed!');
        process.exit(1);
    }

    arrDeviceList.forEach(function(device){
        let caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);

        describe(caseName, function(){

            this.timeout(600000);
            this.slow(1000);

            before(function(){
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                self.driver = driver.session({
                    'platformName': platformName,
                    'udid': device.udid,
                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath
                });
                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                self.screenshotPath = rootPath + '/screenshots/' + casePath;
                self.diffbasePath = rootPath + '/diffbase/' + casePath;
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function(){
                let self = this;
                self.stepId ++;
            });

            afterEach(async function(){
                let self = this;
                let filepath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId;
                let driver = self.driver;
                await driver.getScreenshot(filepath + '.png');
                let json = await driver.source();
                fs.writeFileSync(filepath + '.json', json);
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    let rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function getEnvList(){
    let strEnvList = process.env.devices;
    if(strEnvList){
        return strEnvList.split(/\s*,\s*/).map(function(udid){
            return {udid: udid};
        });
    }
}

function getDeviceList(platformName){
    let arrDeviceList = [];
    let strText, match;
    if(platformName === 'Android')
    {
        // for android
        strText = cp.execSync('adb devices').toString();
        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){
            arrDeviceList.push({
                udid: deviceName
            });
        });
    }
    else{
        // ios real device
        strText = cp.execSync('idevice_id -l').toString();
        strText.replace(/(.+)\r?\n/g, function(all, udid){
            let deviceName = cp.execSync('idevice_id -d '+udid).toString();
            deviceName = deviceName.replace(/\r?\n/g, '');
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
        // ios simulator
        strText = cp.execSync('xcrun simctl list devices').toString();
        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
    }
    return arrDeviceList;
}
