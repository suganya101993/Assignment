'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');

defineSupportCode(function({When,Then}) {

When(/^User Navigate to LogIn Page$/, function () {
    this.driver.findElement(By.linkText('Sign in')).click();
    this.driver.findElement(By.css('div [class*="block card"]')).isDisplayed();
});

When(/^User enters "([^"]*)" and "([^"]*)"$/, function (username, password) {
    this.driver.findElement(By.id("signinemail")).sendKeys(username);
    this.driver.findElement(By.id("signinpassword")).sendKeys(password);
    this.driver.findElement(By.css('input[value = "Sign in"]')).click();
});

Then(/^Message displayed Login Successfully$/, function () {
    this.driver.findElement(By.linkText('Sign out')).isDisplayed();
});

});