'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');

defineSupportCode(function({When,Then}) {

    Then(/^I Click the "([^"]*)" TAB with (\d+)$/, function (sector,index) {
        this.driver.findElement(By.css('section[class ="browse brick"]')).isDisplayed();
        let total = this.driver.findElement(By.xpath('//*[@id="main"]/div[3]/div/section/div/div/ul/li['+index+']/small'));
        let totalSector = this.driver.executeScript('return arguments[0].innerHTML', total);
        this.driver.findElement(By.linkText(sector)).click();
        this.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal(sector+' jobs',textValue);
        });
        this.driver.findElement(By.tagName('h2')).getAttribute("innerText").then(totalSector,sectorJobs => {
            assert.equal('Found'+totalSector+' jobs',sectorJobs)
        });
    });

    When(/^I should see the "([^"]*)" Filtered Jobs$/, function (sector) {
        this.driver.findElement(By.className('filter__parent-term')).getAttribute("innerText").then(filterValue => {
            assert.equal(sector,filterValue)
        });
        this.driver.findElement(By.linkText('Home')).click();
    });
});
