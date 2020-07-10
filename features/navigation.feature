Feature: Get into Job Portal Page
  As an SDET user
  In order to find out Navigation Links and Footer Links are Navigating to correct page

  Scenario: Navigating to TABs Make sure all Links are working
    Given Get into Job page
    When I Click Navigation "Find a job" TAB
    Then I should see some "Found" Page
    When I Click Navigation "Job alerts" TAB
    Then I should see some "Create" Page
    When I Click Navigation "Search recruiters" TAB
    Then I should see some "Search" Page
    When I Click Navigation "Jobs blog" TAB
    Then I should see some "Jobs" Page
