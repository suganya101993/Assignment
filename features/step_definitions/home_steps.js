const {Given,Then} = require('cucumber');
const assert = require('assert');
const {By} = require('selenium-webdriver');
const World = require('../support/world');

(function() {
    "use strict";
    Given(/^Get into Job page$/, () => World.goToJobsPage());

    Then(/^Page is Loaded$/, function () {
        World.driver.findElement(By.css('title')).getAttribute("innerText").then(textValue => {
            const res = textValue.split('|');
            const result = res[0].trim();
            assert.equal('Jobs.Economist.com', result);
        });
        World.driver.findElement(By.id('primary-nav')).isDisplayed();
    });
}());