require('chromedriver');
let innerElement = "innerText";
let titleElement = "title";
const { By} = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert');


class CustomHomePage{

    //Get the Job title from the Job page
    getTheJobPageTitle(pageTitle){
            World.driver.findElement(By.css(titleElement)).getAttribute(innerElement).then(textValue => {
            const res = textValue.split('|');
            const result = res[0].trim();
         assert.equal(pageTitle, result);
        });
    }
}




module.exports = new CustomHomePage();
