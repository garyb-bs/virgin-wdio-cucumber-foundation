const defaults = require("./wdio.conf.ts");
const _ = require("lodash");
const timeStamp = new Date().getTime();

const overrides = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  specs: ["../features/login.feature"],
  maxInstances: 1,
  capabilities: [
    {
      "bstack:options": {
        projectName: "BrowserStack",
        buildName:
          process.env.BROWSERSTACK_BUILD_NAME ||
          "browserstack-examples-webdriverio - " + timeStamp,
        debug: true,
        networkLogs: true,
        video: true,
        maskCommands: "setValues, getValues, setCookies, getCookies",
        os: "Windows",
        osVersion: "10",
      },
      browserName: "Edge",
      browserVersion: "latest",
      acceptInsecureCerts: true,
    },
  ],
  baseUrl: "https://bstackdemo.com/",
  services: [
    [
      "browserstack",
      {
        testObservability: true,
        testObservabilityOptions: {
          projectName: "browserstack-examples-cucumber-webdriverio",
          buildName: "browserstack-examples-cucumber-webdriverio build",
          buildTag: "WDIO Cucumber",
        },
      },
    ],
  ],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
