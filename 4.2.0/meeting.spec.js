var fs = require('fs');var path = require('path');var cp = require('child_process');var chai = require("chai");var should = chai.should();var JWebDriver = require('jwebdriver');chai.use(JWebDriver.chaiSupportChainPromise);var rootPath = getRootPath();var appPath = '/Users/caribou_v4.2.0_20170810.apk';var platformName = 'Android';module.exports = function(){    var driver, testVars;    before(function(){        var self = this;        driver = self.driver;        testVars = self.testVars;    });    it('tap: 请输入手机号 ( //*[@text="请输入手机号"] )', async function(){        await driver.wait('//*[@text="请输入手机号"]', 30000).sendElementActions('tap');    });    it('sendKeys: 13123456789{ESCAPE}', async function(){        await driver.sendKeys(_(`13123456789{ESCAPE}`));    });    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');    });    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');    });    it('sendKeys: 123456{ESCAPE}', async function(){        await driver.sendKeys(_(`123456{ESCAPE}`));    });    it('tap: 登录 ( //*[@text="登录"] )', async function(){        await driver.wait('//*[@text="登录"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="我的"], equal, 我的', async function(){        await driver.sleep(300).wait('//*[@text="我的"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的`));    });    it('tap: 我的 ( //*[@text="我的"] )', async function(){        await driver.wait('//*[@text="我的"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="我的会议"], equal, 我的会议', async function(){        await driver.sleep(300).wait('//*[@text="我的会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的会议`));    });    it('expect: text, //*[@text="待确认"], equal, 待确认', async function(){        await driver.sleep(300).wait('//*[@text="待确认"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`待确认`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 2', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`2`));    });    it('tap: 待确认 ( //*[@text="待确认"] )', async function(){        await driver.wait('//*[@text="待确认"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 众趣科技', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`众趣科技`));    });    it('expect: text, //*[@text="2018年6月14日   15:30 — 16:30 "], contain, 2018年6月14日', async function(){        await driver.sleep(300).wait('//*[@text="2018年6月14日   15:30 — 16:30 "]', 30000)               .text()               .should.not.be.a('error')               .should.contain(_(`2018年6月14日`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 众趣科技', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`众趣科技`));    });    it('expect: text, //*[@text="待确认会议"], equal, 待确认会议', async function(){        await driver.sleep(300).wait('//*[@text="待确认会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`待确认会议`));    });    it('back: ', async function(){        await driver.back();    });    it('expect: text, //*[@text="待参加"], equal, 待参加', async function(){        await driver.sleep(300).wait('//*[@text="待参加"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`待参加`));    });    it('tap: 待参加 ( //*[@text="待参加"] )', async function(){        await driver.wait('//*[@text="待参加"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="待参加会议"], equal, 待参加会议', async function(){        await driver.sleep(300).wait('//*[@text="待参加会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`待参加会议`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 保多多', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`保多多`));    });    it('back: ', async function(){        await driver.back();    });    it('expect: text, //*[@text="已完成"], equal, 已完成', async function(){        await driver.sleep(300).wait('//*[@text="已完成"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已完成`));    });    it('expect: text, //*[@text="5"], equal, 5', async function(){        await driver.sleep(300).wait('//*[@text="5"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`5`));    });    it('tap: 已完成 ( //*[@text="已完成"] )', async function(){        await driver.wait('//*[@text="已完成"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="已完成会议"], equal, 已完成会议', async function(){        await driver.sleep(300).wait('//*[@text="已完成会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已完成会议`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 猎户座实验室', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`猎户座实验室`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 蜜颜网', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`蜜颜网`));    });    it('expect: text, //*[@text="箱信"], equal, 箱信', async function(){        await driver.sleep(300).wait('//*[@text="箱信"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`箱信`));    });    it('back: ', async function(){        await driver.back();    });    it('expect: text, //*[@text="已拒绝"], equal, 已拒绝', async function(){        await driver.sleep(300).wait('//*[@text="已拒绝"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已拒绝`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView, equal, 1', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`1`));    });    it('tap: 已拒绝 ( //*[@text="已拒绝"] )', async function(){        await driver.wait('//*[@text="已拒绝"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="已拒绝会议"], equal, 已拒绝会议', async function(){        await driver.sleep(300).wait('//*[@text="已拒绝会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已拒绝会议`));    });    it('expect: text, //*[@text="初心客厅"], equal, 初心客厅', async function(){        await driver.sleep(300).wait('//*[@text="初心客厅"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`初心客厅`));    });    it('expect: text, //*[@text="面谈会议"], equal, 面谈会议', async function(){        await driver.sleep(300).wait('//*[@text="面谈会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`面谈会议`));    });    it('back: ', async function(){        await driver.back();    });    it('expect: text, //*[@text="我的会议"], equal, 我的会议', async function(){        await driver.sleep(300).wait('//*[@text="我的会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的会议`));    });    function _(str){        if(typeof str === 'string'){            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){                return testVars[key] || '';            });        }        else{            return str;        }    }};if(module.parent && /mocha\.js/.test(module.parent.id)){    runThisSpec();}function runThisSpec(){    // read config    var config = require(rootPath + '/config.json');    var webdriverConfig = Object.assign({},config.webdriver);    var host = webdriverConfig.host;    var port = webdriverConfig.port || 4444;    var testVars = config.vars;    var screenshotPath = rootPath + '/screenshots';    var doScreenshot = fs.existsSync(screenshotPath);    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');    var arrDeviceList = getEnvList() || getDeviceList(platformName);    if(arrDeviceList.length ===0 ){        console.log('Search mobile device failed!');        process.exit(1);    }    arrDeviceList.forEach(function(device){        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);        if(doScreenshot){            mkdirs(path.dirname(screenshotPath + '/' + caseName));        }        describe(caseName, function(){            var stepId = 1;            this.timeout(600000);            this.slow(1000);            before(function(){                var self = this;                var driver = new JWebDriver({                    'host': host,                    'port': port                });                self.driver = driver.session({                    'platformName': platformName,                    'udid': device.udid,                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath                });                self.testVars = testVars;                return self.driver;            });            module.exports();            afterEach(function(){                if(doScreenshot){                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');                    }) + '_' + (stepId++);                    return this.driver.getScreenshot(filepath + '.png').source().then(function(code){                        fs.writeFileSync(filepath + '.json', code);                    }).catch(function(){});                }            });            after(function(){                return this.driver.close();            });        });    });}function getRootPath(){    var rootPath = path.resolve(__dirname);    while(rootPath){        if(fs.existsSync(rootPath + '/config.json')){            break;        }        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));    }    return rootPath;}function mkdirs(dirname){    if(fs.existsSync(dirname)){        return true;    }else{        if(mkdirs(path.dirname(dirname))){            fs.mkdirSync(dirname);            return true;        }    }}function callSpec(name){    try{        require(rootPath + '/' + name)();    }    catch(e){        console.log(e)        process.exit(1);    }}function getEnvList(){    var strEnvList = process.env.devices;    if(strEnvList){        return strEnvList.split(/\s*,\s*/).map(function(udid){            return {udid: udid};        });    }}function getDeviceList(platformName){    var arrDeviceList = [];    var strText, match;    if(platformName === 'Android')    {        // for android        strText = cp.execSync('adb devices').toString();        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){            arrDeviceList.push({                udid: deviceName            });        });    }    else{        // ios real device        strText = cp.execSync('idevice_id -l').toString();        strText.replace(/(.+)\r?\n/g, function(all, udid){            var deviceName = cp.execSync('idevice_id -d '+udid).toString();            deviceName = deviceName.replace(/\r?\n/g, '');            arrDeviceList.push({                name: deviceName,                udid: udid            });        });        // ios simulator        strText = cp.execSync('xcrun simctl list devices').toString();        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){            arrDeviceList.push({                name: deviceName,                udid: udid            });        });    }    return arrDeviceList;}