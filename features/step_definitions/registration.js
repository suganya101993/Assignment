'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');

defineSupportCode(function({Then}) {

   Then(/^User Navigate to Registration Page$/, function () {
       this.driver.findElement(By.linkText('Create account')).click();
       this.driver.findElement(By.css('div[class*="card"]')).isDisplayed();
    });

});