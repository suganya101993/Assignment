'use strict';
const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver');
const assert = require('assert');

defineSupportCode(function({When, Then}) {

    Then(/^I Verifying \("([^"]*)"\) blog Text\("([^"]*)"\) and Viewing article link\("([^"]*)"\) is working with (\d+)$/, function (job,jobText,link,index) {
        this.driver.executeScript("window.scrollBy(0,500)");
        this.driver.findElement(By.css('section[class ="'+job+' brick"]')).isDisplayed();
        let blog = this.driver.findElement(By.xpath('//*[@id="main"]/div[4]/div/div/div['+index+']/section/div/h2/span'));
        this.driver.executeScript('return arguments[0].innerHTML', blog).then(textValue => {
            assert.equal(jobText,textValue)
        });
        this.driver.findElement(By.linkText(link)).click();
    });


    When(/^I should see the Job Blog page with Job Articles$/, function () {
        this.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal('Jobs blog',textValue)
        });
        this.driver.findElement(By.css('div[class = "grid cf"]')).isDisplayed();
        let heading;
        this.driver.findElement(By.tagName('h3')).getAttribute("innerText").then(textValue => {
            heading = textValue;
        });
        let image1 = this.driver.findElement(By.xpath("//*[@id='main']/div/div/div[1]/ul/li[1]/div/div[1]/a/img"));
        this.driver.executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != 'undefined' && arguments[0].naturalWidth > 0", image1).then(function (present) {
            assert.equal( present, true, 'Image not displayed' );
        });
        this.driver.findElement(By.xpath("//*[@id='main']/div/div/div[1]/ul/li[1]/div/div[1]/a/img")).click();
        this.driver.findElement(By.id('main')).isDisplayed();
        this.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(text => {
            assert.equal(heading,text);
        });
        this.driver.findElement(By.tagName('p')).isDisplayed();
        this.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        this.driver.findElement(By.css('ul[class ="share-buttons cf"]')).isDisplayed();
        this.driver.findElement(By.linkText('Back to listing')).click();
    });
});
