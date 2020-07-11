Feature: Footer in the Job page
  Verifying all the links are working
  Verifying all the links

  Scenario: Navigating to Footer pages make sure all Links are functional
    Given Navigate to Job page
    Then Footer Section should be visible
    When I Click "About Us" TAB
    Then I should see "About Us" Page
    And I Click "Contact Us" TAB
    Then I should see "Contact Us" Page
    And I Click "Terms & Conditions" TAB
    Then I should see "Terms & Conditions" Page
    And I Click "Privacy Policy" TAB
    Then I should see "Privacy Policy" Page
    And I Click "Advertise with us" TAB
    Then I should see "Refund policy" TAB
    And I Click "Help" TAB
    Then I should see "Help" Page
    And I Click "F" Icon
    Then I should Navigate to Economics "The Economist Careers Network | Facebook" Job Page
    And I Click "T" Icon
    Then I should Navigate to Economics "Careers Network (@CareersNetwork) / Twitter" Job Page
    And I Click "L" Icon
    Then I should Navigate to Economics "The Economist Careers Network | LinkedIn" Job Page