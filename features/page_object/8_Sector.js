require('chromedriver');
let innerElement = "innerText";
const {By} = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert');
let tagElementOne = "h1";
let tagElementTwo = "h2";
let applyElement = "Apply";
let homeElement = "Page-objects";


class CustomSectorPage {

    clickSectorJobs(sector, index) {

        // Navigating to particular job sector fields
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
    }

    verifyingSectorPage(sector) {
        // Verifying the filtered jobs in home page and sector page are same

        World.driver.findElement(By.className('filter__parent-term')).getAttribute(innerElement).then(filterValue => {
            assert.equal(sector, filterValue);
        });
        World.driver.findElement(By.className('js-clickable-area-link')).click();
        World.driver.findElement(By.linkText(applyElement)).isDisplayed();
        World.driver.findElement(By.linkText(homeElement)).click();
    }
}


module.exports = new CustomSectorPage();
