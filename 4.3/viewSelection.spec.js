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

    it('drag: 794, 1481, 1076, 486, 0.77', async function(){
        await driver.sendActions('drag', {fromX: 794, fromY:1481, toX:1076, toY:486, duration: 0.77});
    });

    it('drag: 737, 1463, 788, 636, 0.93', async function(){
        await driver.sendActions('drag', {fromX: 737, fromY:1463, toX:788, toY:636, duration: 0.93});
    });

    it('drag: 758, 1412, 800, 727, 0.99', async function(){
        await driver.sendActions('drag', {fromX: 758, fromY:1412, toX:800, toY:727, duration: 0.99});
    });

    it('expect: text, //*[@text="逐鹿科技组"], equal, 逐鹿科技组', async function(){
        await driver.sleep(300).wait('//*[@text="逐鹿科技组"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`逐鹿科技组`));
    });

    it('drag: 971, 1105, 297, 1033, 0.96', async function(){
        await driver.sendActions('drag', {fromX: 971, fromY:1105, toX:297, toY:1033, duration: 0.96});
    });

    it('drag: 1010, 1132, 234, 1069, 1.09', async function(){
        await driver.sendActions('drag', {fromX: 1010, fromY:1132, toX:234, toY:1069, duration: 1.09});
    });

    it('drag: 986, 1114, 183, 1057, 1.02', async function(){
        await driver.sendActions('drag', {fromX: 986, fromY:1114, toX:383, toY:1057, duration: 1.02});
    });

    it('expect: text, //*[@text="查看全部"], equal, 查看全部', async function(){
        await driver.sleep(300).wait('//*[@text="查看全部"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`查看全部`));
    });

    it('tap: 查看全部 ( //*[@text="查看全部"] )', async function(){
        await driver.wait('//*[@text="查看全部"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="全部机构"], equal, 全部机构', async function(){
        await driver.sleep(300).wait('//*[@text="全部机构"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`全部机构`));
    });

    it('expect: text, //*[@text="逐鹿科技组"], equal, 逐鹿科技组', async function(){
        await driver.sleep(300).wait('//*[@text="逐鹿科技组"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`逐鹿科技组`));
    });

    it('expect: text, //*[@text="已订阅"], equal, 已订阅', async function(){
        await driver.sleep(300).wait('//*[@text="已订阅"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`已订阅`));
    });

    it('tap: 已订阅 ( //*[@text="已订阅"] )', async function(){
        await driver.wait('//*[@text="已订阅"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, contain, 订阅', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`订阅`));
    });

    it('tap: + 订阅 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="已订阅"], equal, 已订阅', async function(){
        await driver.sleep(300).wait('//*[@text="已订阅"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`已订阅`));
    });


    it('drag: 505, 1550, 1076, 561, 0.63', async function(){
        await driver.sendActions('drag', {fromX: 505, fromY:1550, toX:1076, toY:561, duration: 0.63});
    });

    it('drag: 601, 1598, 649, 486, 0.45', async function(){
        await driver.sendActions('drag', {fromX: 601, fromY:1598, toX:649, toY:486, duration: 0.45});
    });

    it('drag: 661, 700, 595, 1826, 0.47', async function(){
        await driver.sendActions('drag', {fromX: 661, fromY:700, toX:595, toY:1826, duration: 0.47});
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.View', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.View', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView, equal, 逐鹿科技组', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`逐鹿科技组`));
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 正在服务', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`正在服务`));
    });

    it('expect: text, //*[@text="关于我们"], equal, 关于我们', async function(){
        await driver.sleep(300).wait('//*[@text="关于我们"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`关于我们`));
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.View', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.View', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="项目详情"], equal, 项目详情', async function(){
        await driver.sleep(300).wait('//*[@text="项目详情"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目详情`));
    });

    it('expect: text, //*[@text="项目FA"], equal, 项目FA', async function(){
        await driver.sleep(300).wait('//*[@text="项目FA"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`项目FA`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('tap: 关于我们 ( //*[@text="关于我们"] )', async function(){
        await driver.wait('//*[@text="关于我们"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="团队成员"], equal, 团队成员', async function(){
        await driver.sleep(300).wait('//*[@text="团队成员"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`团队成员`));
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.View', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.View', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="FA Profile"], equal, FA Profile', async function(){
        await driver.sleep(300).wait('//*[@text="FA Profile"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`FA Profile`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="全部机构"], equal, 全部机构', async function(){
        await driver.sleep(300).wait('//*[@text="全部机构"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`全部机构`));
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
