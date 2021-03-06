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

    it('drag: 645, 1586, 1077, 684, 1.33', async function(){
        await driver.sendActions('drag', {fromX: 645, fromY:1586, toX:1077, toY:684, duration: 1.33});
    });

    it('drag: 705, 1544, 764, 678, 1.55', async function(){
        await driver.sendActions('drag', {fromX: 705, fromY:1544, toX:764, toY:678, duration: 1.55});
    });

    it('drag: 764, 1455, 749, 919, 1.54', async function(){
        await driver.sendActions('drag', {fromX: 764, fromY:1455, toX:749, toY:919, duration: 1.54});
    });

    it('expect: text, //*[@text="精选机构"], equal, 精选机构', async function(){
        await driver.sleep(300).wait('//*[@text="精选机构"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`精选机构`));
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

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.TextView, contain, 订阅', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`订阅`));
    });

    it('tap: + 订阅 ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.TextView )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.TextView', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="已订阅"], equal, 已订阅', async function(){
        await driver.sleep(300).wait('//*[@text="已订阅"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`已订阅`));
    });

    it('drag: 877, 1053, 1077, 1035, 1.46', async function(){
        await driver.sendActions('drag', {fromX: 877, fromY:1053, toX:1077, toY:1035, duration: 1.46});
    });

    it('drag: 874, 1131, 377, 1152, 1.34', async function(){
        await driver.sendActions('drag', {fromX: 874, fromY:1131, toX:377, toY:1152, duration: 1.34});
    });

    it('drag: 803, 1184, 571, 1193, 0.84', async function(){
        await driver.sendActions('drag', {fromX: 803, fromY:1184, toX:571, toY:1193, duration: 0.84});
    });

    it('drag: 978, 1169, 461, 1149, 0.95', async function(){
        await driver.sendActions('drag', {fromX: 978, fromY:1169, toX:461, toY:1149, duration: 0.95});
    });

    it('drag: 877, 1214, 440, 1244, 0.96', async function(){
        await driver.sendActions('drag', {fromX: 877, fromY:1214, toX:440, toY:1244, duration: 0.96});
    });

    it('drag: 901, 1190, 327, 1238, 1.24', async function(){
        await driver.sendActions('drag', {fromX: 901, fromY:1190, toX:327, toY:1238, duration: 1.24});
    });

    it('expect: text, //*[@text="查看全部"], equal, 查看全部', async function(){
        await driver.sleep(300).wait('//*[@text="查看全部"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`查看全部`));
    });

    it('drag: 148, 1268, 874, 1312, 2.09', async function(){
        await driver.sendActions('drag', {fromX: 148, fromY:1268, toX:874, toY:1312, duration: 2.09});
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
