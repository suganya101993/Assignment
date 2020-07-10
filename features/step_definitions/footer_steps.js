'use strict';
const {By} = require('selenium-webdriver');
const assert = require('assert');
const {When, Then} = require('cucumber');
const World = require('../support/world');

// defineSupportCode(function({When, Then}) {

    Then(/^Footer Section should get visible$/, function () {
        World.driver.findElement(By.className('contentinfo')).isDisplayed();
        World.driver.findElement(By.css('ul[class = "tertiary-nav__items cf"]')).isDisplayed();
        let element = World.driver.findElement(By.css('p[class="copyright no-margin"]'));
        element.getText().then(textValue => {
            assert.equal('© 2011 - 2020 The Economist Newspaper Limited. Powered by Madgex Job Board Solutions',textValue)
        });
    });
    When(/^I Click "([^"]*)" TAB$/, function (footerTabs) {
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).click();
    });
    Then(/^I should see "([^"]*)" Page$/, function (footerTabs) {
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal(footerTabs,textValue)
        });
    });
    Then(/^I should see "([^"]*)" TAB$/, function (footerTabs) {
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).isDisplayed();
        World.driver.findElement(By.linkText(footerTabs)).click();
        World.driver.findElement(By.tagName('h1')).getAttribute("innerText").then(textValue => {
            assert.equal(footerTabs,textValue)
        });
        World.driver.findElement(By.linkText('Jobseekers')).click();
    });
    When(/^I Click "([^"]*)" Icon$/, function (socialText) {
        World.driver.manage().timeouts().implicitlyWait(10000)
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.css('ul[class ="social-buttons cf"]')).isDisplayed();
        World.driver.findElement(By.css('a[data-icon="'+socialText+'"]')).click();
    });
    Then(/^I should Navigate to Economics "([^"]*)" Job Page$/, function (socialTitle) {
        World.driver.getAllWindowHandles().then(handles =>{
            World.driver.switchTo().window(handles[1]);
            World.driver.findElement(By.tagName("title")).getAttribute("innerText").then(fb => {
                assert.equal(socialTitle,fb)
            });
            World.driver.close();
            World.driver.switchTo().window(handles[0]);
        });
    });
