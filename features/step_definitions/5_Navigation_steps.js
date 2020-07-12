const {When, Then} = require('cucumber');
const Navigation = require('../page_object/5_Navigation');

(function () {
    "use strict";
    When(/^I Click Navigation "([^"]*)" TAB$/, function (tabButton) {
        Navigation.clickNavTab(tabButton);
    });

    Then(/^I should see some "([^"]*)" Page$/, function (tabTitle) {
        Navigation.navToMenuPage(tabTitle);
    });
}());

