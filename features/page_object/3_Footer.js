require('chromedriver');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');
let tagElementOne = "h1";
let titleElement = "title";
let innerElement = "innerText";


class CustomFooterPage {
    isFooterVisible() {
        //Make sure footer frame is visible
        World.driver.findElement(By.className('contentinfo')).isDisplayed();
        World.driver.findElement(By.css('ul[class = "tertiary-nav__items cf"]')).isDisplayed();
        let element = World.driver.findElement(By.css('p[class="copyright no-margin"]'));
        element.getText().then(textValue => {
            assert.equal('© 2011 - 2020 The Economist Newspaper Limited. Powered by Madgex Job Board Solutions', textValue);
        });
    }

    clickOnFooterMenu(footerTabs) {
        //Navigate to respective Footer Tabs
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).click();
    }

    navToFooterTabPages(footerTabs) {
        //Make sure get into respective Footer Menu page
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(footerTabs, textValue);
        });
    }

    isFooterTabVisible(footerTabs) {
        //Make sure Footer Tab is visible
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).isDisplayed();
        World.driver.findElement(By.linkText(footerTabs)).click();
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(footerTabs, textValue);
        });
        World.driver.findElement(By.linkText('Jobseekers')).click();
    }

    isFooterSocialIconVisible(socialText) {
        //Clicking respective footer social icons
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.css('ul[class ="social-buttons cf"]')).isDisplayed();
        World.driver.findElement(By.css('a[data-icon="' + socialText + '"]')).click();
    }

    isSocialPageNavToCorrectPage(socialTitle) {
        // Navigate to the respective social footer pages
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
