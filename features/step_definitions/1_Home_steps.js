const {Given, Then} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');
const World = require('../support/world');
let navElement = "primary-nav";
let innerElement = "innerText";
let titleElement = "title";

(function () {
    "use strict";
    Given(/^Navigate to Job page$/, () => World.goToJobsPage());

    Then(/^Page is Loaded$/, function () {
        World.driver.findElement(By.css(titleElement)).getAttribute(innerElement).then(textValue => {
            const res = textValue.split('|');
            const result = res[0].trim();
            assert.equal('Jobs.Economist.com', result);
        });
        World.driver.findElement(By.id(navElement)).isDisplayed();
    });
}());