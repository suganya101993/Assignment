const {Given, Then} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');
const World = require('../support/world');
let navElement = "primary-nav";
const Home = require('../page_object/1_Home');


(function () {
    "use strict";
    Given(/^Navigate to Job page$/, () => World.goToJobsPage());

    Then(/^Page is Loaded with the title "([^"]*)"$/, function (pageTitle) {

        Home.getTheJobTitle(pageTitle);
        return World.driver.findElement(By.id(navElement)).isDisplayed();
    });

}());