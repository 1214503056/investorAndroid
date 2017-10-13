var fs = require('fs');var path = require('path');var cp = require('child_process');var chai = require("chai");var should = chai.should();var JWebDriver = require('jwebdriver');chai.use(JWebDriver.chaiSupportChainPromise);var rootPath = getRootPath();var appPath = '/Users/caribou.apk';var platformName = 'Android';module.exports = function(){    var driver, testVars;    before(function(){        var self = this;        driver = self.driver;        testVars = self.testVars;    });    callSpec('commons/login.mod.js');    it('expect: text, //*[@text="逐鹿甄选"], equal, 逐鹿甄选', async function(){        await driver.sleep(300).wait('//*[@text="逐鹿甄选"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`逐鹿甄选`));    });    it('drag: 428, 1144, 614, 326, 0.74', async function(){        await driver.sendActions('drag', {fromX: 428, fromY:1144, toX:614, toY:326, duration: 0.74});    });    it('drag: 458, 1231, 554, 432, 1.38', async function(){        await driver.sendActions('drag', {fromX: 458, fromY:1231, toX:554, toY:432, duration: 1.38});    });    it('drag: 558, 1187, 694, 166, 0.66', async function(){        await driver.sendActions('drag', {fromX: 558, fromY:1187, toX:694, toY:166, duration: 0.66});    });    it('drag: 777, 655, 767, 1653, 0.61', async function(){        await driver.sendActions('drag', {fromX: 777, fromY:655, toX:767, toY:1653, duration: 0.61});    });    it('drag: 897, 545, 1076, 2202, 0.61', async function(){        await driver.sendActions('drag', {fromX: 897, fromY:545, toX:1076, toY:2202, duration: 0.61});    });    it('drag: 864, 785, 870, 1227, 0.56', async function(){        await driver.sendActions('drag', {fromX: 864, fromY:785, toX:870, toY:1227, duration: 0.56});    });    it('expect: text, //*[@text="逐鹿甄选"], equal, 逐鹿甄选', async function(){        await driver.sleep(300).wait('//*[@text="逐鹿甄选"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`逐鹿甄选`));    });    it('expect: text, //*[@text="搜索业内最全项目数据库"], equal, 搜索业内最全项目数据库', async function(){        await driver.sleep(300).wait('//*[@text="搜索业内最全项目数据库"]', 30000)               .text()               .should.not.be.a('error')               .should.equal(_(`搜索业内最全项目数据库`));    });    function _(str){        if(typeof str === 'string'){            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){                return testVars[key] || '';            });        }        else{            return str;        }    }};if(module.parent && /mocha\.js/.test(module.parent.id)){    runThisSpec();}function runThisSpec(){    // read config    var config = require(rootPath + '/config.json');    var webdriverConfig = Object.assign({},config.webdriver);    var host = webdriverConfig.host;    var port = webdriverConfig.port || 4444;    var testVars = config.vars;    var screenshotPath = rootPath + '/screenshots';    var doScreenshot = fs.existsSync(screenshotPath);    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');    var arrDeviceList = getEnvList() || getDeviceList(platformName);    if(arrDeviceList.length ===0 ){        console.log('Search mobile device failed!');        process.exit(1);    }    arrDeviceList.forEach(function(device){        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);        if(doScreenshot){            mkdirs(path.dirname(screenshotPath + '/' + caseName));        }        describe(caseName, function(){            var stepId = 1;            this.timeout(600000);            this.slow(1000);            before(function(){                var self = this;                var driver = new JWebDriver({                    'host': host,                    'port': port                });                self.driver = driver.session({                    'platformName': platformName,                    'udid': device.udid,                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath                });                self.testVars = testVars;                return self.driver;            });            module.exports();            afterEach(function(){                if(doScreenshot){                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');                    }) + '_' + (stepId++);                    return this.driver.getScreenshot(filepath + '.png').source().then(function(code){                        fs.writeFileSync(filepath + '.json', code);                    }).catch(function(){});                }            });            after(function(){                return this.driver.close();            });        });    });}function getRootPath(){    var rootPath = path.resolve(__dirname);    while(rootPath){        if(fs.existsSync(rootPath + '/config.json')){            break;        }        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));    }    return rootPath;}function mkdirs(dirname){    if(fs.existsSync(dirname)){        return true;    }else{        if(mkdirs(path.dirname(dirname))){            fs.mkdirSync(dirname);            return true;        }    }}function callSpec(name){    try{        require(rootPath + '/' + name)();    }    catch(e){        console.log(e)        process.exit(1);    }}function getEnvList(){    var strEnvList = process.env.devices;    if(strEnvList){        return strEnvList.split(/\s*,\s*/).map(function(udid){            return {udid: udid};        });    }}function getDeviceList(platformName){    var arrDeviceList = [];    var strText, match;    if(platformName === 'Android')    {        // for android        strText = cp.execSync('adb devices').toString();        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){            arrDeviceList.push({                udid: deviceName            });        });    }    else{        // ios real device        strText = cp.execSync('idevice_id -l').toString();        strText.replace(/(.+)\r?\n/g, function(all, udid){            var deviceName = cp.execSync('idevice_id -d '+udid).toString();            deviceName = deviceName.replace(/\r?\n/g, '');            arrDeviceList.push({                name: deviceName,                udid: udid            });        });        // ios simulator        strText = cp.execSync('xcrun simctl list devices').toString();        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){            arrDeviceList.push({                name: deviceName,                udid: udid            });        });    }    return arrDeviceList;}