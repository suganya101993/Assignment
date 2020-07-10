'use strict';
const {defineSupportCode} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');
const World = require('../support/world');

defineSupportCode(function({When, Then}) {

    When(/^I Click Navigation "([^"]*)" TAB$/, function (tabButton) {
        World.driver.findElement(By.linkText(tabButton)).click();
    });

    Then(/^I should see some "([^"]*)" Page$/, function (tabTitle) {
        World.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            // const res = textValue.split(" ");
            // const result = res[0].trim();
            assert.equal(tabTitle,result)
        });
    });
});
