Feature: Get into Job Portal Page
  As an SDET user
  In order to find out Navigation Links and Footer Links are Navigating to correct page

  Scenario: Navigating to TABs Make sure all Links are working
    Given Get into Job page
    When I Click Navigation "Find a Job" TAB
    Then I should see some "Found" Page
    When I Click Navigation "Job Alerts" TAB
    Then I should see some "Create a job alert" Page
    When I Click Navigation "Search Recruiters" TAB
    Then I should see some "Search Recruiters" Page
    When I Click Navigation "Jobs blog" TAB
    Then I should see some "Jobs blog" Page
