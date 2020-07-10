Feature: In the Sector Job Blog
  Verifying all the sector field Jobs
  Verifying all the sector field blogs

  Scenario: Get into Sector Jobs
    Given Get into Job page
    Then I Click the "Banking and finance" TAB with 1
    When I should see the "Banking and finance" Filtered Jobs
    Then I Click the "Business services" TAB with 2
    When I should see the "Business services" Filtered Jobs
    Then I Click the "Government" TAB with 3
    When I should see the "Government" Filtered Jobs
    Then I Click the "Academia" TAB with 4
    When I should see the "Academia" Filtered Jobs
    Then I Click the "Charity" TAB with 5
    When I should see the "Charity" Filtered Jobs
    Then I Click the "International public sector" TAB with 6
    When I should see the "International public sector" Filtered Jobs
    Then I Click the "Consultancy" TAB with 7
    When I should see the "Consultancy" Filtered Jobs
    Then I Click the "Development" TAB with 8
    When I should see the "Development" Filtered Jobs
    Then I Click the "Humanitarian" TAB with 9
    When I should see the "Humanitarian" Filtered Jobs
    Then I Click the "Other" TAB with 10
    When I should see the "Other" Filtered Jobs
