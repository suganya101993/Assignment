'use strict';
const {defineSupportCode} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');

defineSupportCode(function({Given,When, Then}) {

    Given(/^Get into Job page$/, function () {
        this.driver.get('https://jobs.economist.com/');
        this.driver.findElement(By.tagName('title')).getAttribute("innerText").then(textValue => {
            const res = textValue.split('|');
            const result = res[0].trim();
            assert.equal('Jobs.Economist.com',result)
        });
    });
    Then(/^Page is Loaded$/, function () {
        this.driver.findElement(By.id('primary-nav')).isDisplayed();
    });
});