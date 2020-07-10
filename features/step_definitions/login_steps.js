const {When,Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
const World = require('../support/world');

(function() {
    "use strict";
    When(/^User Navigate to LogIn Page$/, function () {
        World.driver.findElement(By.linkText('Sign in')).click();
        World.driver.findElement(By.css('title')).getAttribute("innerText").then(textValue => {
            assert.equal('Logon | Jobs.Economist.com', textValue);
        });
    });

    When(/^User enters "([^"]*)" and "([^"]*)"$/, function (username, password) {
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.id('signinemail')).sendKeys(username);
        World.driver.findElement(By.id('signinpassword')).sendKeys(password);
        World.driver.findElement(By.css('input[value = "Sign in"]')).click();
    });

    Then(/^Message displayed Login Successfully$/, function () {
        World.driver.findElement(By.id('message')).isDisplayed();
    });
}());
