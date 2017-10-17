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

    it('expect: text, //*[@text="动态"], equal, 动态', async function(){
        await driver.sleep(300).wait('//*[@text="动态"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`动态`));
    });

    it('tap: 动态 ( //*[@text="动态"] )', async function(){
        await driver.wait('//*[@text="动态"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, contain, 关注', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`关注`));
    });

    it('tap: +关注 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="已关注"], contain, 关注', async function(){
        await driver.sleep(300).wait('//*[@text="已关注"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`关注`));
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2], contain, #', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`#`));
    });

    it('drag: 712, 1154, 759, 454, 1.34', async function(){
        await driver.sendActions('drag', {fromX: 712, fromY:1154, toX:759, toY:454, duration: 1.34});
    });

    it('drag: 568, 1169, 628, 586, 1.42', async function(){
        await driver.sendActions('drag', {fromX: 568, fromY:1169, toX:628, toY:586, duration: 1.42});
    });

    it('drag: 628, 586, 673, 1351, 1.09', async function(){
        await driver.sendActions('drag', {fromX: 628, fromY:586, toX:673, toY:1351, duration: 1.09});
    });

    it('drag: 655, 272, 565, 1285, 1.19', async function(){
        await driver.sendActions('drag', {fromX: 655, fromY:272, toX:565, toY:1285, duration: 1.19});
    });

    it('drag: 700, 541, 619, 1821, 0.75', async function(){
        await driver.sendActions('drag', {fromX: 700, fromY:541, toX:619, toY:1821, duration: 0.75});
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="投资领域"], equal, 投资领域', async function(){
        await driver.sleep(300).wait('//*[@text="投资领域"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`投资领域`));
    });

    it('tap: 取消 ( //*[@text="取消"] )', async function(){
        await driver.wait('//*[@text="取消"]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: 企业服务 ( //*[@text="企业服务"] )', async function(){
        await driver.wait('//*[@text="企业服务"]', 30000).sendElementActions('tap');
    });

    it('tap: 企业服务 ( //*[@text="企业服务"] )', async function(){
        await driver.wait('//*[@text="企业服务"]', 30000).sendElementActions('tap');
    });

    it('tap: 确定 ( //*[@text="确定"] )', async function(){
        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[4], contain, 来自', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[4]', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`来自`));
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
