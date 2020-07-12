const {Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const {expect} = require('chai');
const assert = require('assert');
const World = require('../support/world');
const Registration = require('../Page_object/6_Registration');


(function () {
    "use strict";
    Then(/^User Navigate to Registration Page "([^"]*)"$/, function (pageTitle) {
        Registration.navToRegistrationPage(pageTitle);
    });
}());