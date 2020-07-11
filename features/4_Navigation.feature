Feature: In order to find out all Navigation Menu Links are functional to the respective pages.

  Scenario: Navigating to all menu TABs are functional
    Given Navigate to Job page
    And I Click Navigation "Find a job" TAB
    Then I should see some "Found" Page
    And I Click Navigation "Job alerts" TAB
    Then I should see some "Create" Page
    And I Click Navigation "Search recruiters" TAB
    Then I should see some "Search" Page
    And I Click Navigation "Jobs blog" TAB
    Then I should see some "Jobs" Page
