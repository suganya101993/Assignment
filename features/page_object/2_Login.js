require('chromedriver');
let innerElement = "innerText";
const {Builder, Capabilities, By, until} = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert');
let titleElement = "title";
let emailElement = "signinemail";
let pwdElement = "signinpassword";
let signInButtonElement = "Sign in";
let signInElement ='input[value = "Sign in"]';

class CustomLoginPage{

    navToLoginPage(pageTitle){
        //User navigate to the Login page
        World.driver.findElement(By.linkText(signInButtonElement)).click();
        World.driver.findElement(By.css(titleElement)).getAttribute(innerElement).then(textValue => {
            assert.equal(pageTitle, textValue);
        });
    }
    loginWith(username, password){
        // User Enter username and password
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.id(emailElement)).sendKeys(username);
        World.driver.findElement(By.id(pwdElement)).sendKeys(password);
        World.driver.findElement(By.css(signInElement)).click();
    }

}


module.exports = new CustomLoginPage();
