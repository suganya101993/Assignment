const {When, Then} = require('cucumber');
const Sector = require('../Page_object/8_Sector');

(function () {
    "use strict";
    When(/^I Click the "([^"]*)" TAB with (\d+)$/, function (sector, index) {

        Sector.clickSectorJobs(sector, index);

    });

    Then(/^I should see the "([^"]*)" Filtered Jobs$/, function (sector) {

        Sector.verifyingSectorPage(sector);

    });
}());

