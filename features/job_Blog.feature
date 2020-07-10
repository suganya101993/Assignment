Feature: In the Job Blog
  Verifying all the articles
  Verifying all the Job blogs

  Scenario: Get into Job Blog Page
    Given Get into Job page
    Then I Verifying ("articles") blog Text("Jobs blog") and Viewing article link("View all articles") is working with 1
    When I should see the Job Blog page with Job Articles
#    Then I should see some careers information Page