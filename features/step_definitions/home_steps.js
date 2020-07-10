'use strict';
const {Given,Then} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');
const World = require('../support/world');

    Given(/^Get into Job page$/, () => World.goToJobsPage());
        // this.driver.get('https://jobs.economist.com/');
        // this.driver.findElement(By.tagName('title')).getAttribute("innerText").then(textValue => {
        //     const res = textValue.split('|');
        //     const result = res[0].trim();
        //     assert.equal('Jobs.Economist.com',result)
        // });

    Then(/^Page is Loaded$/, function () {
        World.driver.findElement(By.id('primary-nav')).isDisplayed();
    });
