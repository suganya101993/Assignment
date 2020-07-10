const {When, Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
const World = require('../support/world');

(function () {
    "use strict";
    When(/^user enters the "([^"]*)" and "([^"]*)"$/, function (keywords, location) {
        World.driver.findElement(By.id("keywords")).sendKeys(keywords);
        World.driver.findElement(By.id("location")).sendKeys(location);
        World.driver.findElement(By.className('submit')).click();
    });
    When(/^User click the search button "([^"]*)"$/, function (keywords) {
        let res = World.driver.findElement(By.id('searching')).getAttribute("innerText").then(sectorJobs => {
            res.split(" ");
            assert.equal(keywords, res[6]);
        });
    });

    Then(/^User Should see the filtered Job Listing$/, function () {
        World.driver.findElement(By.css('input[value="it"]')).isDisplayed();
        World.driver.findElement(By.css('input[value="United Kingdom"]')).isDisplayed();
    });

    Then(/^User Should see the filtered "([^"]*)" and "([^"]*)" Job Listing$/, function (keywords, location) {
        World.driver.findElement(By.css('input[value="' + keywords + '"]')).isDisplayed();
        World.driver.findElement(By.css('input[value="' + location + '"]')).isDisplayed();
    });
}());