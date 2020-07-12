const {When, Then} = require('cucumber');
const Search = require('../page_object/7_Search');


(function () {
    "use strict";
    When(/^user enters the "([^"]*)" and "([^"]*)" in the particular search fields$/, function (keywords, location) {
        Search.enterSearchKeywords(keywords, location);
    });

    Then(/^After clicking the search button Verifying the Filtered "([^"]*)"$/, function (keywords) {
        Search.verifySearch(keywords);
    });

    Then(/^User Should see the filtered "([^"]*)" and "([^"]*)" Job Listing$/, function (keywords, location) {
        Search.verifyFilteredKeyword(keywords, location);
    });

}());
