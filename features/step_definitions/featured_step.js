'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');

defineSupportCode(function({Then}) {

// Then(/^I Verifying \("([^"]*)"\) blog Text\("([^"]*)"\) and Viewing article link\("([^"]*)"\) is working with (\d+)$/, function (job,jobText,link,index) {
//     this.driver.executeScript("window.scrollBy(0,500)");
//     this.driver.findElement(By.css('section[class ="'+job+' brick"]')).isDisplayed();
//     let featured = this.driver.findElement(By.xpath('//*[@id="main"]/div[4]/div/div/div['+index+']/section/div/h2/span)'));
//     this.driver.executeScript('return arguments[0].innerHTML', featured).then(textValue => {
//         assert.equal(jobText,textValue)
//     });
//     this.driver.findElement(By.linkText(link)).click();
// });
});