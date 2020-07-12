const {When, Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const World = require('../support/world');
let msgElement = "message";
const Login = require('../Page_object/2_Login');


(function () {
    "use strict";

    When(/^User Navigate to LogIn Page "([^"]*)"$/, function (pageTitle) {
        Login.navToLoginPage(pageTitle);
    });

    When(/^User enters "([^"]*)" and "([^"]*)"$/, function (username, password) {
        Login.loginWith(username, password);
    });

    Then(/^Message displayed Login Successfully$/, function () {
        World.driver.findElement(By.id(msgElement)).isDisplayed();
    });
}());
