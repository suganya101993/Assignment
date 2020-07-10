Feature: In the featured Job Blog
  Verifying all the articles
  Verifying all the featured Job blogs

  Scenario: Get into featured Job Blog Page
    Given Get into Job page
    Then I Verifying ("featured-jobs") blog Text("Featured jobs") and Viewing article link("View all jobs") is working with 2
