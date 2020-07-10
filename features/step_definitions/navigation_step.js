'use strict';
const {defineSupportCode} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');

defineSupportCode(function({When, Then}) {

    When(/^I Click Navigation "([^"]*)" TAB$/, function (tabButton) {
        this.driver.findElement(By.linkText(tabButton)).click();
    });

    Then(/^I should see some "([^"]*)" Page$/, function (tabTitle) {
        this.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            // const res = textValue.split(" ");
            // const result = res[0].trim();
            assert.equal(tabTitle,result)
        });
    });
});
