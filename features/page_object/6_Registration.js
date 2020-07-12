require('chromedriver');
let innerElement = "innerText";
const {By} = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert');
let titleElement = "title";
let createElement = "Create account";


class CustomRegistrationPage {

 //User navigate to the registration page when clicking the "create account" tab.
    navToRegistrationPage(pageTitle){
        World.driver.findElement(By.linkText(createElement)).click();
        World.driver.findElement(By.css(titleElement)).getAttribute(innerElement).then(textValue => {
            assert.equal(pageTitle, textValue);
        });
    }
}

module.exports = new CustomRegistrationPage();
