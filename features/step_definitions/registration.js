'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');

defineSupportCode(function({When}) {

   When(/^User Navigate to Registration Page$/, function () {
       this.driver.findElement(By.linkText('Create account')).click();
       this.driver.findElement(By.css('div[class*="card"]')).isDisplayed();
    });

   });