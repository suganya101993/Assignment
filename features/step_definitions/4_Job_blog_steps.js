const {Then, When} = require('cucumber');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const World = require('../support/world');
let heading;
let imageElement = "//*[@id='main']/div/div/div[1]/ul/li[1]/div/div[1]/a/img";
let innerElement = "innerText";
let tagElementOne = "h1";
let tagElementTwo = "h3";
const Job_Blog = require('../Page_object/4_Job_Blog');

(function () {
    "use strict";
    When(/^I Verifying \("([^"]*)"\) blog Text\("([^"]*)"\) and Viewing article link\("([^"]*)"\) is working with (\d+)$/, function (job, jobText, link, index) {

        Job_Blog.navToJobBlog(job, jobText, link, index);
    });

    Then(/^I should see the "([^"]*)" Title on job blog page with Job Articles$/, function (jobTitle) {

        Job_Blog.verifyingJobBlogPage(jobTitle);
    });

    Then(/^I click the particular Blog$/, function () {

        Job_Blog.navToArticle();
    });
    Then(/^I should see some Article information$/, function () {

        Job_Blog.verifyingArticlePage();
    });
}());
