Feature: Validation for Sign_in Page
  when clicking Sign in button from job page
  Verifying navigating to correct page
  Verifying Valid username and password
  Verifying Invalid username and password

  Scenario Outline: Verifying the valid and invalid credentials to the login page
    Given Navigate to Job page
    When User Navigate to LogIn Page "Logon | Jobs.Economist.com"
    When User enters "<Username>" and "<Password>"
    Then Message displayed Login Successfully
    Examples:
      | Username | Password |
      | tester.usereconomics@gmail.com | Tester@123 |
      | testuser_2@gmail.com | Test@154 |