Feature: In the Sector Job Blog
  Verifying all the sector field Jobs and Blogs

  Scenario: Navigate to Sector Jobs Page and verifying the page functionalities
    Given Navigate to Job page
    And I Click the "Banking and finance" TAB with 1
    Then I should see the "Banking and finance" Filtered Jobs
    And I Click the "Business services" TAB with 2
    Then I should see the "Business services" Filtered Jobs
    And I Click the "Government" TAB with 3
    Then I should see the "Government" Filtered Jobs
    And I Click the "Academia" TAB with 4
    Then I should see the "Academia" Filtered Jobs
    And I Click the "Charity" TAB with 5
    Then I should see the "Charity" Filtered Jobs
    And I Click the "International public sector" TAB with 6
    Then I should see the "International public sector" Filtered Jobs
    And I Click the "Consultancy" TAB with 7
    Then I should see the "Consultancy" Filtered Jobs
    And I Click the "Development" TAB with 8
    Then I should see the "Development" Filtered Jobs
    And I Click the "Humanitarian" TAB with 9
    Then I should see the "Humanitarian" Filtered Jobs
    And I Click the "Other" TAB with 10
    Then I should see the "Other" Filtered Jobs
