require('chromedriver');
let innerElement = "innerText";
const {By} = require('selenium-webdriver');
const World = require('../support/world');
const assert = require('assert');
let tagElementOne = "h1";



class CustomNavigationPage {

 // To click the respective menu item from the economist job page
    clickNavTab(tabButton) {
        World.driver.findElement(By.linkText(tabButton)).click();
    }

    navToMenuPage(tabTitle) {
 // After clicking the menu item,to ensure that it navigate to the respective menu page
        World.driver.manage().timeouts().implicitlyWait(10000);
        World.driver.findElement(By.tagName(tagElementOne)).getAttribute(innerElement).then(textValue => {
            const res = textValue.split(" ");
            const result = res[0].trim();
            assert.equal(tabTitle, result);
        });
    }

}


module.exports = new CustomNavigationPage();
