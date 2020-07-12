const {When, Then} = require('cucumber');
const Footer = require('../page_object/3_Footer');

(function () {
    "use strict";
    Then(/^Footer Section should be visible$/, function () {
       Footer.isFooterVisible();
    });
    When(/^I Click "([^"]*)" TAB$/, function (footerTabs) {
        Footer.clickOnFooterMenu();
    });
    Then(/^I should see "([^"]*)" Page$/, function (footerTabs) {
        Footer.navToFooterTabPages(footerTabs);

    });
    Then(/^I should see "([^"]*)" TAB$/, function (footerTabs) {
        Footer.isFooterTabVisible(footerTabs);
    });

    When(/^I Click "([^"]*)" Icon$/, function (socialText) {
        Footer.isFooterSocialIconVisible(socialText);
    });

    Then(/^I should Navigate to Economics "([^"]*)" Job Page$/, function (socialTitle) {
        Footer.isSocialPageNavToCorrectPage(socialTitle);
    });
}());