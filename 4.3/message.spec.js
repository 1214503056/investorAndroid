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

    it('tap: 消息 ( //*[@text="消息"] )', async function(){
        await driver.wait('//*[@text="消息"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 消息', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`消息`));
    });

    it('expect: text, //*[@text="小助手Janice"], contain, 小助手', async function(){
        await driver.sleep(300).wait('//*[@text="小助手Janice"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`小助手`));
    });

    it('expect: text, //*[@text="初心客厅"], equal, 初心客厅', async function(){
        await driver.sleep(300).wait('//*[@text="初心客厅"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`初心客厅`));
    });

    it('tap: 小助手Janice ( //*[@text="小助手Janice"] )', async function(){
        await driver.wait('//*[@text="小助手Janice"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="逐鹿小助手"], equal, 逐鹿小助手', async function(){
        await driver.sleep(300).wait('//*[@text="逐鹿小助手"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`逐鹿小助手`));
    });

    it('tap: 向逐鹿小助手直接咨询... ( //*[@text="向逐鹿小助手直接咨询项目情况"] )', async function(){
        await driver.wait('//*[@text="向逐鹿小助手直接咨询项目情况"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 有bug吧{ESCAPE}', async function(){
        await driver.sendKeys(_(`有bug吧{ESCAPE}`));
    });

    it('tap: 发送 ( //*[@text="发送"] )', async function(){
        await driver.wait('//*[@text="发送"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 有bug吧', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`有bug吧`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('tap: 初心客厅 ( //*[@text="初心客厅"] )', async function(){
        await driver.wait('//*[@text="初心客厅"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView, equal, 初心客厅', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`初心客厅`));
    });

    it('tap: 向项目FA直接咨询项目... ( //*[@text="向项目FA直接咨询项目情况"] )', async function(){
        await driver.wait('//*[@text="向项目FA直接咨询项目情况"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 没有bug{ESCAPE}', async function(){
        await driver.sendKeys(_(`没有bug{ESCAPE}`));
    });

    it('tap: 发送 ( //*[@text="发送"] )', async function(){
        await driver.wait('//*[@text="发送"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 没有bug', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`没有bug`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 消息', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`消息`));
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
