const {Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
const World = require('../support/world');

(function () {
    "use strict";
    Then(/^User Navigate to Registration Page$/, function () {
        World.driver.findElement(By.linkText('Create account')).click();
        World.driver.findElement(By.css('div[class*="card"]')).isDisplayed();
    });
}());