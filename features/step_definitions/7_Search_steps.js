const {When, Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
const World = require('../support/world');
let innerElement = "innerText";

(function () {
    "use strict";
    When(/^user enters the "([^"]*)" and "([^"]*)" in the particular search fields$/, function (keywords, location) {
        World.driver.findElement(By.id("keywords")).sendKeys(keywords);
        World.driver.findElement(By.id("location")).sendKeys(location);
        World.driver.findElement(By.className('submit')).click();
    });
    Then(/^After clicking the search button Verifying the Filtered "([^"]*)"$/, function (keywords) {
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.id('searching')).getAttribute(innerElement).then(sectorJobs => {
            let res = sectorJobs.slice(28,-1);
            let result=  res.replace(/'/gi, "");
            assert.equal(keywords,result.toUpperCase());
        });
    });
    Then(/^User Should see the filtered "([^"]*)" and "([^"]*)" Job Listing$/, function (keywords, location) {
        World.driver.findElement(By.css('input[value="'+keywords+'"]')).isDisplayed();
        World.driver.findElement(By.css('input[value="' + location + '"]')).isDisplayed();
    });
}());
