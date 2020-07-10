'use strict';
const {By} = require('selenium-webdriver');
const assert = require('assert');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given,When, Then}) {

    Then(/^Footer Section should get visible$/, function () {
        this.driver.findElement(By.className('contentinfo')).isDisplayed();
        this.driver.findElement(By.css('ul[class = "tertiary-nav__items cf"]')).isDisplayed();
        let element = this.driver.findElement(By.css('p[class="copyright no-margin"]'));
        element.getText().then(textValue => {
            assert.equal('© 2011 - 2020 The Economist Newspaper Limited. Powered by Madgex Job Board Solutions',textValue)
        });
    });
    When(/^I Click "([^"]*)" TAB$/, function (footerTabs) {
        this.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        this.driver.findElement(By.linkText(footerTabs)).click();
    });
    Then(/^I should see "([^"]*)" Page$/, function (footerTabs) {
        this.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal(footerTabs,textValue)
        });
    });
    Then(/^I should see "([^"]*)" TAB$/, function (footerTabs) {
        this.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        this.driver.findElement(By.linkText(footerTabs)).isDisplayed();
        this.driver.findElement(By.linkText(footerTabs)).click();
        this.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal(footerTabs,textValue)
        });
    });
    When(/^I Click "([^"]*)" Icon$/, function (socialText) {
        this.driver.findElement(By.linkText('Jobseekers')).click();
        this.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        this.driver.findElement(By.css('ul[class ="social-buttons cf"]')).isDisplayed();
        this.driver.findElement(By.css('a[data-icon="'+socialText+'"]')).click();
    });
    Then(/^I should Navigate to Economics "([^"]*)" Job Page$/, function (socialTitle) {
        this.driver.getAllWindowHandles().then(handles =>{
            this.driver.switchTo().window(handles[1]);
            this.driver.findElement(By.tagName("title")).getAttribute("innerText").then(fb => {
                assert.equal(socialTitle,fb)
            });
            this.driver.close();
            this.driver.switchTo().window(handles[0]);
        });
    });
});
