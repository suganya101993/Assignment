Feature: Verifying the Job blogs articles information

  Scenario: Navigating to the Job blog and Articles information page
    Given Job page is Loaded
    And I Verifying ("articles") blog Text("Jobs blog") and Viewing article link("View all articles") is working with 1
    Then I should see the "Jobs blog" Title on job blog page with Job Articles
    And I click the particular Blog
    Then I should see some Article information