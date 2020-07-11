const {When, Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
const World = require('../support/world');
let innerElement = "innerText";
let emailElement = "signinemail";
let pwdElement = "signinpassword";
let msgElement = "message";
let titleElement = "title";
let signInElement = "Sign in";


(function () {
    "use strict";
    When(/^User Navigate to LogIn Page$/, function () {
        World.driver.findElement(By.linkText(signInElement)).click();
        World.driver.findElement(By.css(titleElement)).getAttribute(innerElement).then(textValue => {
            assert.equal('Logon | Jobs.Economist.com', textValue);
        });
    });

    When(/^User enters "([^"]*)" and "([^"]*)"$/, function (username, password) {
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.id(emailElement)).sendKeys(username);
        World.driver.findElement(By.id(pwdElement)).sendKeys(password);
        World.driver.findElement(By.css('input[value = "Sign in"]')).click();
    });

    Then(/^Message displayed Login Successfully$/, function () {
        World.driver.findElement(By.id(msgElement)).isDisplayed();
    });
}());
