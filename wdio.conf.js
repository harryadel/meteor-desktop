const path = require('path');
const { getDirname } = require('cross-dirname');
const paths = require('./tests/helpers/paths');

process.env.TEST = true;
const { join } = path;
const testAppDir = path.join(paths.testsIntegrationTmpPath, 'test-desktop');
const dirname = getDirname();

// appDir = path.join(paths.testsIntegrationTmpPath, 'test-desktop');
/* app = new Application({ */
/* path: require(path.join(appDir, 'node_modules', 'electron')), */
/* args: [path.join(appDir, '.meteor', 'desktop-build')], */
/* requireName: 'electronRequire', */
/* startTimeout: 60000, */
/* env: { */
/* NODE_ENV: 'test', */
/* ELECTRON_ENV: 'test', */
/* METEOR_DESKTOP_NO_SPLASH_SCREEN: 1 */
/* }, */
/* chromeDriverLogPath: path.join(__dirname, 'chrome.log') */
/* }); */


module.exports.config = {
    services: [
        [
            'electron',
            {
                appPath: join(testAppDir, 'node_modules', 'electron'),
                appName: 'test-desktop',
                appArgs: [join(testAppDir, '.meteor', 'desktop-build')],
                chromedriver: {
                    port: 9519,
                    logFileName: 'wdio-chromedriver.log',
                },
                electronVersion: '25.3.1',
            },

        ],
    ],

    /* capabilities: [{}], */
    port: 9519,
    waitforTimeout: 5000,
    connectionRetryCount: 10,
    connectionRetryTimeout: 30000,
    logLevel: 'debug',
    runner: 'local',
    outputDir: 'wdio-logs',
    // specs: ['testconf.js'],
    // autoCompileOpts: {
    //     autoCompile: true,
    //     tsNodeOpts: {
    //         esm: true,
    //         transpileOnly: true,
    //         files: true,
    //         project: join(dirname, 'tsconfig.test.json'),
    //     },
    // },
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

};
