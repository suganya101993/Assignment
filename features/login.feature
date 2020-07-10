Feature: In the Sign_in Job Blog
  when clicking Sign in button from job site
  Verifying navigating to correct page
  Verifying Valid username and password
  Verifying Invalid username and password

  Scenario Outline: Get into Sector Jobs
    Given Get into Job page
    When User Navigate to LogIn Page
    And User enters "<Username>" and "<Password>"
    Then Message displayed Login Successfully
    Examples:
      | Username | Password |
      | tester.usereconomics@gmail.com | Tester@123 |
      | testuser_2 | Test@154 |