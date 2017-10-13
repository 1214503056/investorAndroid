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

    it('expect: text, //*[@text="回放测试脚本专用"], equal, 回放测试脚本专用', async function(){
        await driver.sleep(300).wait('//*[@text="回放测试脚本专用"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`回放测试脚本专用`));
    });

    it('tap: 编辑 ( //*[@text="编辑"] )', async function(){
        await driver.wait('//*[@text="编辑"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="个人资料"], equal, 个人资料', async function(){
        await driver.sleep(300).wait('//*[@text="个人资料"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`个人资料`));
    });

    it('expect: text, //*[@text="头像"], equal, 头像', async function(){
        await driver.sleep(300).wait('//*[@text="头像"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`头像`));
    });

    it('expect: text, //*[@text="微信"], equal, 微信', async function(){
        await driver.sleep(300).wait('//*[@text="微信"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`微信`));
    });

    it('expect: text, //*[@text="姓名"], equal, 姓名', async function(){
        await driver.sleep(300).wait('//*[@text="姓名"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`姓名`));
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[2], equal, 回放测试脚本专用', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[2]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`回放测试脚本专用`));
    });

    it('expect: text, //*[@text="机构"], equal, 机构', async function(){
        await driver.sleep(300).wait('//*[@text="机构"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`机构`));
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[4], equal, 英华资本', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[4]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`英华资本`));
    });

    it('expect: text, //*[@text="职位"], equal, 职位', async function(){
        await driver.sleep(300).wait('//*[@text="职位"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`职位`));
    });

    it('expect: text, //*[@text="合伙人"], equal, 合伙人', async function(){
        await driver.sleep(300).wait('//*[@text="合伙人"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`合伙人`));
    });

    it('expect: text, //*[@text="邮箱"], equal, 邮箱', async function(){
        await driver.sleep(300).wait('//*[@text="邮箱"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`邮箱`));
    });

    it('expect: text, //*[@text="33@qq.com"], equal, 33@qq.com', async function(){
        await driver.sleep(300).wait('//*[@text="33@qq.com"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`33@qq.com`));
    });

    it('expect: text, //*[@text="手机"], equal, 手机', async function(){
        await driver.sleep(300).wait('//*[@text="手机"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`手机`));
    });

    it('expect: text, //*[@text="13123456789"], equal, 13123456789', async function(){
        await driver.sleep(300).wait('//*[@text="13123456789"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`13123456789`));
    });

    it('expect: text, //*[@text="为确保信息安全，个人信息修改请联系"], contain, 个人信息修改请联系', async function(){
        await driver.sleep(300).wait('//*[@text="为确保信息安全，个人信息修改请联系"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.contain(_(`个人信息修改请联系`));
    });

    it('expect: text, //*[@text="逐鹿小助手"], equal, 逐鹿小助手', async function(){
        await driver.sleep(300).wait('//*[@text="逐鹿小助手"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`逐鹿小助手`));
    });

    it('tap: 逐鹿小助手 ( //*[@text="逐鹿小助手"] )', async function(){
        await driver.wait('//*[@text="逐鹿小助手"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView, equal, 逐鹿小助手', async function(){
        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`逐鹿小助手`));
    });

    it('tap: 向逐鹿小助手直接咨询... ( //*[@text="向逐鹿小助手直接咨询项目..."] )', async function(){
        await driver.wait('//*[@text="向逐鹿小助手直接咨询项目..."]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 测试两下，哈哈{ESCAPE}', async function(){
        await driver.sendKeys(_(`测试两下，哈哈{ESCAPE}`));
    });

    it('tap: 发送 ( //*[@text="发送"] )', async function(){
        await driver.wait('//*[@text="发送"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="测试两下，哈哈"], equal, 测试两下，哈哈', async function(){
        await driver.sleep(300).wait('//*[@text="测试两下，哈哈"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`测试两下，哈哈`));
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="个人资料"], equal, 个人资料', async function(){
        await driver.sleep(300).wait('//*[@text="个人资料"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`个人资料`));
    });

    it('tap:  ( //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2] )', async function(){
        await driver.wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@text="请选择头像来源"], equal, 请选择头像来源', async function(){
        await driver.sleep(300).wait('//*[@text="请选择头像来源"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`请选择头像来源`));
    });

    it('tap: 取消 ( //*[@text="取消"] )', async function(){
        await driver.wait('//*[@text="取消"]', 30000).sendElementActions('tap');
    });

    it('back: ', async function(){
        await driver.back();
    });

    it('expect: text, //*[@text="编辑"], equal, 编辑', async function(){
        await driver.sleep(300).wait('//*[@text="编辑"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`编辑`));
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
