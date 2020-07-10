const {Then,When} = require('cucumber');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');

(function() {
    "use strict";
    Then(/^I Verifying \("([^"]*)"\) blog Text\("([^"]*)"\) and Viewing article link\("([^"]*)"\) is working with (\d+)$/, function (job, jobText, link, index) {
        World.driver.executeScript("window.scrollBy(0,500)");
        World.driver.findElement(By.css('section[class ="' + job + ' brick"]')).isDisplayed();
        let blog = World.driver.findElement(By.xpath('//*[@id="main"]/div[4]/div/div/div[' + index + ']/section/div/h2/span'));
        World.driver.executeScript('return arguments[0].innerHTML', blog).then(textValue => {
            assert.equal(jobText, textValue);
        });
        World.driver.findElement(By.linkText(link)).click();
    });


    When(/^I should see the Job Blog page with Job Articles$/, function () {
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal('Jobs blog', textValue);
        });
        World.driver.findElement(By.css('div[class = "grid cf"]')).isDisplayed();
        let heading;
        World.driver.findElement(By.tagName('h3')).getAttribute("innerText").then(textValue => {
            heading = textValue;
        });
        let image1 = World.driver.findElement(By.xpath("//*[@id='main']/div/div/div[1]/ul/li[1]/div/div[1]/a/img"));
        World.driver.executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != 'undefined' && arguments[0].naturalWidth > 0", image1).then(function (present) {
            assert.equal(present, true, 'Image not displayed');
        });
        World.driver.findElement(By.xpath("//*[@id='main']/div/div/div[1]/ul/li[1]/div/div[1]/a/img")).click();
        World.driver.findElement(By.id('main')).isDisplayed();
        World.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(text => {
            assert.equal(heading, text);
        });
        World.driver.findElement(By.tagName('p')).isDisplayed();
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.css('ul[class ="share-buttons cf"]')).isDisplayed();
        World.driver.findElement(By.linkText('Back to listing')).click();
    });
}());

