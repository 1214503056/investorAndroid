var fs = require('fs');var path = require('path');var cp = require('child_process');var chai = require("chai");var should = chai.should();var JWebDriver = require('jwebdriver');chai.use(JWebDriver.chaiSupportChainPromise);var rootPath = getRootPath();var appPath = '/Users/caribou.apk';var platformName = 'Android';module.exports = function(){    var driver, testVars;    before(function(){        var self = this;        driver = self.driver;        testVars = self.testVars;    });    it('drag: 995, 823, 0, 1057, 0.67', async function(){        await driver.sendActions('drag', {fromX: 995, fromY:823, toX:0, toY:1057, duration: 0.67});    });    it('drag: 1034, 796, 309, 868, 0.53', async function(){        await driver.sendActions('drag', {fromX: 1034, fromY:796, toX:309, toY:868, duration: 0.53});    });    it('tap: 立即体验 ( //*[@text="立即体验"] )', async function(){        await driver.wait('//*[@text="立即体验"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="验证码登录"], equal, 验证码登录', async function(){        await driver.sleep(300).wait('//*[@text="验证码登录"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`验证码登录`));    });    it('tap: 请输入手机号 ( //*[@text="请输入手机号"] )', async function(){        await driver.wait('//*[@text="请输入手机号"]', 30000).sendElementActions('tap');    });    it('sendKeys: 13123456789{ESCAPE}', async function(){        await driver.sendKeys(_(`13123456789{ESCAPE}`));    });    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');    });    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');    });    it('sendKeys: 123456{ESCAPE}', async function(){        await driver.sendKeys(_(`123456{ESCAPE}`));    });    it('tap: 登录 ( //*[@text="登录"] )', async function(){        await driver.wait('//*[@text="登录"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="逐鹿甄选"], equal, 逐鹿甄选', async function(){        await driver.sleep(300).wait('//*[@text="逐鹿甄选"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`逐鹿甄选`));    });    it('expect: text, //*[@text="我的"], equal, 我的', async function(){        await driver.sleep(300).wait('//*[@text="我的"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的`));    });    it('tap: 我的 ( //*[@text="我的"] )', async function(){        await driver.wait('//*[@text="我的"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="英华资本"], equal, 英华资本', async function(){        await driver.sleep(300).wait('//*[@text="英华资本"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`英华资本`));    });    it('expect: text, //*[@text="回放测试脚本专用"], equal, 回放测试脚本专用', async function(){        await driver.sleep(300).wait('//*[@text="回放测试脚本专用"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`回放测试脚本专用`));    });    it('expect: text, //*[@text="编辑"], equal, 编辑', async function(){        await driver.sleep(300).wait('//*[@text="编辑"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`编辑`));    });    it('expect: text, //*[@text="关注的项目"], equal, 关注的项目', async function(){        await driver.sleep(300).wait('//*[@text="关注的项目"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`关注的项目`));    });    it('expect: text, //*[@text="看过的项目"], equal, 看过的项目', async function(){        await driver.sleep(300).wait('//*[@text="看过的项目"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`看过的项目`));    });    it('expect: text, //*[@text="订阅的机构"], equal, 订阅的机构', async function(){        await driver.sleep(300).wait('//*[@text="订阅的机构"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`订阅的机构`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView, equal, 2', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`2`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView, equal, 1', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`1`));    });    it('expect: text, //*[@text="我的会议"], equal, 我的会议', async function(){        await driver.sleep(300).wait('//*[@text="我的会议"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的会议`));    });    it('expect: text, //*[@text="待确认"], equal, 待确认', async function(){        await driver.sleep(300).wait('//*[@text="待确认"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`待确认`));    });    it('expect: text, //*[@text="待参加"], equal, 待参加', async function(){        await driver.sleep(300).wait('//*[@text="待参加"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`待参加`));    });    it('expect: text, //*[@text="已完成"], equal, 已完成', async function(){        await driver.sleep(300).wait('//*[@text="已完成"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已完成`));    });    it('expect: text, //*[@text="已拒绝"], equal, 已拒绝', async function(){        await driver.sleep(300).wait('//*[@text="已拒绝"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已拒绝`));    });    it('expect: text, //*[@text="投资偏好"], equal, 投资偏好', async function(){        await driver.sleep(300).wait('//*[@text="投资偏好"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`投资偏好`));    });    it('expect: text, //*[@text="关注轮次"], equal, 关注轮次', async function(){        await driver.sleep(300).wait('//*[@text="关注轮次"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`关注轮次`));    });    it('expect: text, //*[@text="关注领域"], equal, 关注领域', async function(){        await driver.sleep(300).wait('//*[@text="关注领域"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`关注领域`));    });    it('expect: text, //*[@text="投资币种"], equal, 投资币种', async function(){        await driver.sleep(300).wait('//*[@text="投资币种"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`投资币种`));    });    it('expect: text, //*[@text="投资额度"], equal, 投资额度', async function(){        await driver.sleep(300).wait('//*[@text="投资额度"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`投资额度`));    });    it('drag: 530, 1474, 808, 571, 1.06', async function(){        await driver.sendActions('drag', {fromX: 530, fromY:1474, toX:808, toY:571, duration: 1.06});    });    it('drag: 465, 1468, 443, 930, 1.48', async function(){        await driver.sendActions('drag', {fromX: 465, fromY:1468, toX:443, toY:930, duration: 1.48});    });    it('expect: text, //*[@text="常驻城市"], equal, 常驻城市', async function(){        await driver.sleep(300).wait('//*[@text="常驻城市"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`常驻城市`));    });    it('expect: text, //*[@text="100万 一 200万"], equal, 100万 一 200万', async function(){        await driver.sleep(300).wait('//*[@text="100万 一 200万"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`100万 一 200万`));    });    it('expect: text, //*[@text="其他"], equal, 其他', async function(){        await driver.sleep(300).wait('//*[@text="其他"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`其他`));    });    it('expect: text, //*[@text="设置"], equal, 设置', async function(){        await driver.sleep(300).wait('//*[@text="设置"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`设置`));    });    it('expect: text, //*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2], equal, 未填写', async function(){        await driver.sleep(300).wait('//*[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`未填写`));    });    it('drag: 861, 396, 504, 1477, 0.80', async function(){        await driver.sendActions('drag', {fromX: 861, fromY:396, toX:504, toY:1477, duration: 0.80});    });    it('expect: text, //*[@text="回放测试脚本专用"], equal, 回放测试脚本专用', async function(){        await driver.sleep(300).wait('//*[@text="回放测试脚本专用"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`回放测试脚本专用`));    });    function _(str){        if(typeof str === 'string'){            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){                return testVars[key] || '';            });        }        else{            return str;        }    }};if(module.parent && /mocha\.js/.test(module.parent.id)){    runThisSpec();}function runThisSpec(){    // read config    var config = require(rootPath + '/config.json');    var webdriverConfig = Object.assign({},config.webdriver);    var host = webdriverConfig.host;    var port = webdriverConfig.port || 4444;    var testVars = config.vars;    var screenshotPath = rootPath + '/screenshots';    var doScreenshot = fs.existsSync(screenshotPath);    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');    var arrDeviceList = getEnvList() || getDeviceList(platformName);    if(arrDeviceList.length ===0 ){        console.log('Search mobile device failed!');        process.exit(1);    }    arrDeviceList.forEach(function(device){        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);        if(doScreenshot){            mkdirs(path.dirname(screenshotPath + '/' + caseName));        }        describe(caseName, function(){            var stepId = 1;            this.timeout(600000);            this.slow(1000);            before(function(){                var self = this;                var driver = new JWebDriver({                    'host': host,                    'port': port                });                self.driver = driver.session({                    'platformName': platformName,                    'udid': device.udid,                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath                });                self.testVars = testVars;                return self.driver;            });            module.exports();            afterEach(function(){                if(doScreenshot){                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');                    }) + '_' + (stepId++);                    return this.driver.getScreenshot(filepath + '.png').source().then(function(code){                        fs.writeFileSync(filepath + '.json', code);                    }).catch(function(){});                }            });            after(function(){                return this.driver.close();            });        });    });}function getRootPath(){    var rootPath = path.resolve(__dirname);    while(rootPath){        if(fs.existsSync(rootPath + '/config.json')){            break;        }        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));    }    return rootPath;}function mkdirs(dirname){    if(fs.existsSync(dirname)){        return true;    }else{        if(mkdirs(path.dirname(dirname))){            fs.mkdirSync(dirname);            return true;        }    }}function callSpec(name){    try{        require(rootPath + '/' + name)();    }    catch(e){        console.log(e)        process.exit(1);    }}function getEnvList(){    var strEnvList = process.env.devices;    if(strEnvList){        return strEnvList.split(/\s*,\s*/).map(function(udid){            return {udid: udid};        });    }}function getDeviceList(platformName){    var arrDeviceList = [];    var strText, match;    if(platformName === 'Android')    {        // for android        strText = cp.execSync('adb devices').toString();        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){            arrDeviceList.push({                udid: deviceName            });        });    }    else{        // ios real device        strText = cp.execSync('idevice_id -l').toString();        strText.replace(/(.+)\r?\n/g, function(all, udid){            var deviceName = cp.execSync('idevice_id -d '+udid).toString();            deviceName = deviceName.replace(/\r?\n/g, '');            arrDeviceList.push({                name: deviceName,                udid: udid            });        });        // ios simulator        strText = cp.execSync('xcrun simctl list devices').toString();        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){            arrDeviceList.push({                name: deviceName,                udid: udid            });        });    }    return arrDeviceList;}