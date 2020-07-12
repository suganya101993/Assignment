require('chromedriver');
const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const {defineSupportCode} = require('cucumber');
const {Builder, Capabilities, By, until} = require('selenium-webdriver');
const fs = require('fs');

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://jobs.economist.com';

function buildDriver() {
    const chromeCapabilities = Capabilities.chrome();
    const chromeOptions = {
        args: ['window-size=1920,1080'],
    };

    chromeCapabilities.set('chromeOptions', chromeOptions);
    return new Builder().forBrowser('chrome')
        .withCapabilities(chromeCapabilities)
        .build();

}

defineSupportCode(function ({setDefaultTimeout}) {
    setDefaultTimeout(DEFAULT_TIMEOUT);
});

class CustomWorld {
    goToJobsPage() {
        return this.driver.get(BASE_URL);
    }

    start() {
        this.driver = buildDriver();
    }

    async end() {
        await this.driver.close();
        return this.driver.quit();
    }
}

const World = function World() {
    const screenshotPath = "screenshots";
    this.driver = buildDriver();
    if (!fs.existsSync(screenshotPath)) {
        fs.mkdirSync(screenshotPath);
    }

};
defineSupportCode(function ({setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
});

module.exports = new CustomWorld();

