const {When, Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');
let innerElement = "innerText";
let tagElementOne = "h1";
let tagElementTwo = "h2";
let applyElement = "Apply";
let homeElement = "Home";

(function () {
    "use strict";
    When(/^I Click the "([^"]*)" TAB with (\d+)$/, function (sector, index) {
        World.driver.findElement(By.css('section[class ="browse brick"]')).isDisplayed();
        let total = World.driver.findElement(By.xpath('//*[@id="main"]/div[3]/div/section/div/div/ul/li[' + index + ']/small'));
        let totalSector = World.driver.executeScript('return arguments[0].innerHTML', total);
        World.driver.findElement(By.linkText(sector)).click();
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(sector + ' jobs', textValue);
        });
        World.driver.findElement(By.tagName(tagElementTwo)).getAttribute(innerElement).then(totalSector, sectorJobs => {
            assert.equal('Found' + totalSector + ' jobs', sectorJobs);
        });
    });

    Then(/^I should see the "([^"]*)" Filtered Jobs$/, function (sector) {
        World.driver.findElement(By.className('filter__parent-term')).getAttribute(innerElement).then(filterValue => {
            assert.equal(sector, filterValue);
        });
        World.driver.findElement(By.className('js-clickable-area-link')).click();
        World.driver.findElement(By.linkText(applyElement)).isDisplayed();
        World.driver.findElement(By.linkText(homeElement)).click();
    });
}());

