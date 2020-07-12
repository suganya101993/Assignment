require('chromedriver');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');
let tagElementOne = "h1";
let titleElement = "title";
let innerElement = "innerText";



class CustomFooterPage{
    isFooterVisible(){
        World.driver.findElement(By.className('contentinfo')).isDisplayed();
        World.driver.findElement(By.css('ul[class = "tertiary-nav__items cf"]')).isDisplayed();
        let element = World.driver.findElement(By.css('p[class="copyright no-margin"]'));
        element.getText().then(textValue => {
            assert.equal('© 2011 - 2020 The Economist Newspaper Limited. Powered by Madgex Job Board Solutions', textValue);
        });
    }
    clickOnFooterMenu(footerTabs){
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).click();
    }

    navToFooterTabPages(footerTabs){
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(footerTabs, textValue);
        });
    }

    isFooterTabVisible(footerTabs){
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).isDisplayed();
        World.driver.findElement(By.linkText(footerTabs)).click();
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(footerTabs, textValue);
        });
        World.driver.findElement(By.linkText('Jobseekers')).click();
    }
    isFooterSocialIconVisible(socialText){
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.css('ul[class ="social-buttons cf"]')).isDisplayed();
        World.driver.findElement(By.css('a[data-icon="' + socialText + '"]')).click();
    }
    isSocialPageNavToCorrectPage(socialTitle){
        World.driver.getAllWindowHandles().then(handles => {
            World.driver.switchTo().window(handles[1]);
            World.driver.findElement(By.tagName(titleElement)).getAttribute(innerElement).then(fb => {
                assert.equal(socialTitle, fb);
            });
            World.driver.close();
            World.driver.switchTo().window(handles[0]);
        });
    }



}


module.exports = new CustomFooterPage();
