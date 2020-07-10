Feature: Footer in the Job page
  Verifying all the links are working
  Verifying all the links

  Scenario: Navigating to Footer pages make sure all Links are working
    Given Get into Job page
    Then Footer Section should get visible
    When I Click "About Us" TAB
    Then I should see "About Us" Page
    When I Click "Contact Us" TAB
    Then I should see "Contact Us" Page
    When I Click "Terms & Conditions" TAB
    Then I should see "Terms & Conditions" Page
    When I Click "Privacy Policy" TAB
    Then I should see "Privacy Policy" Page
    When I Click "Advertise with us" TAB
    Then I should see "Refund policy" TAB
    When I Click "Help" TAB
    Then I should see "Help" Page
    When I Click "F" Icon
    Then I should Navigate to Economics "The Economist Careers Network | Facebook" Job Page
    When I Click "T" Icon
    Then I should Navigate to Economics "Careers Network (@CareersNetwork) / Twitter" Job Page
    When I Click "L" Icon
    Then I should Navigate to Economics "The Economist Careers Network | LinkedIn" Job Page