'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');

defineSupportCode(function({Given,When,Then}) {

    Then(/^I Verifying search fields are working as expected$/, function () {

    });
});

// When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
//     this.driver.findElement(By.id('keywords')).sendKeys(searchQuery);
//     this.driver.findElement(By.className('submit')).click();
//   });