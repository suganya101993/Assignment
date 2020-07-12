require('chromedriver');
const {By} = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert');
const {expect} = require('chai');
let innerElement = "innerText";

class CustomSearchPage {

    enterSearchKeywords(keywords, location){

      // Entering the keyword and location to search fields
        World.driver.findElement(By.id("keywords")).sendKeys(keywords);
        World.driver.findElement(By.id("location")).sendKeys(location);
        World.driver.findElement(By.className('submit')).click();
    }
    verifySearch(keywords) {
        // Verifying the searched keyword from the job list page.

        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.id('searching')).getAttribute(innerElement).then(sectorJobs => {
            let res = sectorJobs.slice(28,-1);
            let result=  res.replace(/'/gi, "");
            assert.equal(keywords,result.toUpperCase());
        });
    }
    verifyFilteredKeyword(keywords, location){

        // Verifying  filtered  search fields ar same as the searched one.

        World.driver.findElement(By.css('input[value="'+keywords+'"]')).isDisplayed();
        World.driver.findElement(By.css('input[value="' + location + '"]')).isDisplayed();
    }

}

module.exports = new CustomSearchPage();
