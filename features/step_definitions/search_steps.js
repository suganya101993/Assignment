'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
var {Then} = require('cucumber');
var {When} = require('cucumber');

defineSupportCode(function({Given,When,Then}) {

// When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
//     this.driver.findElement(By.id('keywords')).sendKeys(searchQuery);
//     this.driver.findElement(By.className('submit')).click();
//   });

});
When(/^user enters the "([^"]*)" and "([^"]*)"$/, function (keywords,location) {
    this.driver.findElement(By.id("keywords")).sendKeys(keywords);
    this.driver.findElement(By.id("location")).sendKeys(location);
    this.driver.findElement(By.className('submit')).click();
});
When(/^User click the search button "([^"]*)"$/, function (keywords) {
    let res = this.driver.findElement(By.id('searching')).getAttribute("innerText").then(sectorJobs => {
        res.split(" ");
        assert.equal(keywords,res[6]);
    });
});

Then(/^User Should see the filtered Job Listing$/, function () {
    this.driver.findElement(By.css('input[value="it"]')).isDisplayed();
    this.driver.findElement(By.css('input[value="United Kingdom"]')).isDisplayed();
});

Then(/^User Should see the filtered "([^"]*)" and "([^"]*)" Job Listing$/, function (keywords,location) {
    this.driver.findElement(By.css('input[value="'+keywords+'"]')).isDisplayed();
    this.driver.findElement(By.css('input[value="'+location+'"]')).isDisplayed();
});