var fs = require('fs');var path = require('path');var cp = require('child_process');var chai = require("chai");var should = chai.should();var JWebDriver = require('jwebdriver');chai.use(JWebDriver.chaiSupportChainPromise);var rootPath = getRootPath();var appPath = '/Users/caribou_v4.2.0_20170810.apk';var platformName = 'Android';module.exports = function(){    var driver, testVars;    before(function(){        var self = this;        driver = self.driver;        testVars = self.testVars;    });    it('tap: 请输入手机号 ( //*[@text="请输入手机号"] )', async function(){        await driver.wait('//*[@text="请输入手机号"]', 30000).sendElementActions('tap');    });    it('sendKeys: 13123456789{ESCAPE}', async function(){        await driver.sendKeys(_(`13123456789{ESCAPE}`));    });    it('tap: 下一步 ( //*[@text="下一步"] )', async function(){        await driver.wait('//*[@text="下一步"]', 30000).sendElementActions('tap');    });    it('tap: 请输入6位验证码 ( //*[@text="请输入6位验证码"] )', async function(){        await driver.wait('//*[@text="请输入6位验证码"]', 30000).sendElementActions('tap');    });    it('sendKeys: 123456{ESCAPE}', async function(){        await driver.sendKeys(_(`123456{ESCAPE}`));    });    it('tap: 登录 ( //*[@text="登录"] )', async function(){        await driver.wait('//*[@text="登录"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="我的订阅"], equal, 我的订阅', async function(){        await driver.sleep(300).wait('//*[@text="我的订阅"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的订阅`));    });    it('tap: 我的订阅 ( //*[@text="我的订阅"] )', async function(){        await driver.wait('//*[@text="我的订阅"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="已关注：企业服务"], contain, 企业服务', async function(){        await driver.sleep(300).wait('//*[@text="已关注：企业服务"]', 30000)               .text()               .should.not.be.a('error')               .should.contain(_(`企业服务`));    });    it('expect: text, //*[@text="更新"], equal, 更新', async function(){        await driver.sleep(300).wait('//*[@text="更新"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`更新`));    });    it('tap: 更新 ( //*[@text="更新"] )', async function(){        await driver.wait('//*[@text="更新"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="投资领域"], equal, 投资领域', async function(){        await driver.sleep(300).wait('//*[@text="投资领域"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`投资领域`));    });    it('tap: 取消 ( //*[@text="取消"] )', async function(){        await driver.wait('//*[@text="取消"]', 30000).sendElementActions('tap');    });    it('tap: 更新 ( //*[@text="更新"] )', async function(){        await driver.wait('//*[@text="更新"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="投资领域"], equal, 投资领域', async function(){        await driver.sleep(300).wait('//*[@text="投资领域"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`投资领域`));    });    it('tap: 电子商务 ( //*[@text="电子商务"] )', async function(){        await driver.wait('//*[@text="电子商务"]', 30000).sendElementActions('tap');    });    it('tap: 本地生活 ( //*[@text="本地生活"] )', async function(){        await driver.wait('//*[@text="本地生活"]', 30000).sendElementActions('tap');    });    it('tap: 确定 ( //*[@text="确定"] )', async function(){        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="已关注：企业服务，本地生活，电子商务"], contain, 企业服务', async function(){        await driver.sleep(300).wait('//*[@text="已关注：企业服务，本地生活，电子商务"]', 30000)               .text()               .should.not.be.a('error')               .should.contain(_(`企业服务`));    });    it('expect: text, //*[@text="已关注：企业服务，本地生活，电子商务"], contain, 本地生活', async function(){        await driver.sleep(300).wait('//*[@text="已关注：企业服务，本地生活，电子商务"]', 30000)               .text()               .should.not.be.a('error')               .should.contain(_(`本地生活`));    });    it('expect: text, //*[@text="已关注：企业服务，本地生活，电子商务"], contain, 电子商务', async function(){        await driver.sleep(300).wait('//*[@text="已关注：企业服务，本地生活，电子商务"]', 30000)               .text()               .should.not.be.a('error')               .should.contain(_(`电子商务`));    });    it('tap: 更新 ( //*[@text="更新"] )', async function(){        await driver.wait('//*[@text="更新"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="投资领域"], equal, 投资领域', async function(){        await driver.sleep(300).wait('//*[@text="投资领域"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`投资领域`));    });    it('tap: 电子商务 ( //*[@text="电子商务"] )', async function(){        await driver.wait('//*[@text="电子商务"]', 30000).sendElementActions('tap');    });    it('tap: 本地生活 ( //*[@text="本地生活"] )', async function(){        await driver.wait('//*[@text="本地生活"]', 30000).sendElementActions('tap');    });    it('tap: 确定 ( //*[@text="确定"] )', async function(){        await driver.wait('//*[@text="确定"]', 30000).sendElementActions('tap');    });    it('expect: text, //*[@text="已关注：企业服务"], equal, 企业服务', async function(){        await driver.sleep(300).wait('//*[@text="已关注：企业服务"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`已关注：企业服务`));    });    it('drag: 913, 1148, 938, 681, 0.71', async function(){        await driver.sendActions('drag', {fromX: 913, fromY:1148, toX:938, toY:681, duration: 0.71});    });    it('drag: 889, 1499, 884, 814, 0.85', async function(){        await driver.sendActions('drag', {fromX: 889, fromY:1499, toX:884, toY:814, duration: 0.85});    });    it('drag: 921, 649, 852, 1186, 0.98', async function(){        await driver.sendActions('drag', {fromX: 921, fromY:649, toX:852, toY:1186, duration: 0.98});    });    it('drag: 896, 437, 739, 1062, 0.86', async function(){        await driver.sendActions('drag', {fromX: 896, fromY:437, toX:739, toY:1062, duration: 0.86});    });    it('expect: text, //*[@text="我的订阅"], equal, 我的订阅', async function(){        await driver.sleep(300).wait('//*[@text="我的订阅"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的订阅`));    });    it('tap: 918, 805', async function(){        await driver.sendActions('tap', {x: 918, y: 805});    });    it('expect: text, //*[@text="项目详情"], equal, 项目详情', async function(){        await driver.sleep(300).wait('//*[@text="项目详情"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`项目详情`));    });    it('back: ', async function(){        await driver.back();    });    it('expect: text, //*[@text="我的订阅"], equal, 我的订阅', async function(){        await driver.sleep(300).wait('//*[@text="我的订阅"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`我的订阅`));    });    function _(str){        if(typeof str === 'string'){            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){                return testVars[key] || '';            });        }        else{            return str;        }    }};if(module.parent && /mocha\.js/.test(module.parent.id)){    runThisSpec();}function runThisSpec(){    // read config    var config = require(rootPath + '/config.json');    var webdriverConfig = Object.assign({},config.webdriver);    var host = webdriverConfig.host;    var port = webdriverConfig.port || 4444;    var testVars = config.vars;    var screenshotPath = rootPath + '/screenshots';    var doScreenshot = fs.existsSync(screenshotPath);    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');    var arrDeviceList = getEnvList() || getDeviceList(platformName);    if(arrDeviceList.length ===0 ){        console.log('Search mobile device failed!');        process.exit(1);    }    arrDeviceList.forEach(function(device){        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);        if(doScreenshot){            mkdirs(path.dirname(screenshotPath + '/' + caseName));        }        describe(caseName, function(){            var stepId = 1;            this.timeout(600000);            this.slow(1000);            before(function(){                var self = this;                var driver = new JWebDriver({                    'host': host,                    'port': port                });                self.driver = driver.session({                    'platformName': platformName,                    'udid': device.udid,                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath                });                self.testVars = testVars;                return self.driver;            });            module.exports();            afterEach(function(){                if(doScreenshot){                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');                    }) + '_' + (stepId++);                    return this.driver.getScreenshot(filepath + '.png').source().then(function(code){                        fs.writeFileSync(filepath + '.json', code);                    }).catch(function(){});                }            });            after(function(){                return this.driver.close();            });        });    });}function getRootPath(){    var rootPath = path.resolve(__dirname);    while(rootPath){        if(fs.existsSync(rootPath + '/config.json')){            break;        }        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));    }    return rootPath;}function mkdirs(dirname){    if(fs.existsSync(dirname)){        return true;    }else{        if(mkdirs(path.dirname(dirname))){            fs.mkdirSync(dirname);            return true;        }    }}function callSpec(name){    try{        require(rootPath + '/' + name)();    }    catch(e){        console.log(e)        process.exit(1);    }}function getEnvList(){    var strEnvList = process.env.devices;    if(strEnvList){        return strEnvList.split(/\s*,\s*/).map(function(udid){            return {udid: udid};        });    }}function getDeviceList(platformName){    var arrDeviceList = [];    var strText, match;    if(platformName === 'Android')    {        // for android        strText = cp.execSync('adb devices').toString();        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){            arrDeviceList.push({                udid: deviceName            });        });    }    else{        // ios real device        strText = cp.execSync('idevice_id -l').toString();        strText.replace(/(.+)\r?\n/g, function(all, udid){            var deviceName = cp.execSync('idevice_id -d '+udid).toString();            deviceName = deviceName.replace(/\r?\n/g, '');            arrDeviceList.push({                name: deviceName,                udid: udid            });        });        // ios simulator        strText = cp.execSync('xcrun simctl list devices').toString();        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){            arrDeviceList.push({                name: deviceName,                udid: udid            });        });    }    return arrDeviceList;}