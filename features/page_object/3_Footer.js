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
        //Verifying the Text from the footer frame
        element.getText().then(textValue => {
            assert.equal('© 2011 - 2020 The Economist Newspaper Limited. Powered by Madgex Job Board Solutions', textValue);
        });
    }

    clickOnFooterMenu(footerTabs) {
        //For navigating to the respective footer tab
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).click();
    }

    navToFooterTabPages(footerTabs) {
        //To ensure that it navigate to the respective footer menu page
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(footerTabs, textValue);
        });
    }

    isFooterTabVisible(footerTabs) {

        //To ensure after clicking the "Advertise with us" footer tab "Help" tab should get visible

        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.linkText(footerTabs)).isDisplayed();
        World.driver.findElement(By.linkText(footerTabs)).click();
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            assert.equal(footerTabs, textValue);
        });
        World.driver.findElement(By.linkText('Jobseekers')).click();
    }

    isFooterSocialIconVisible(socialText) {

        //Clicking the respective social icons from the footer frame
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        World.driver.findElement(By.css('ul[class ="social-buttons cf"]')).isDisplayed();
        World.driver.findElement(By.css('a[data-icon="' + socialText + '"]')).click();
    }

    isSocialPageNavToCorrectPage(socialTitle) {

        // To ensure after clicking social icon from the footer frame.It should navigate to the respective social page.
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
