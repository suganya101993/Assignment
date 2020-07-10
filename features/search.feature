Feature: In the search field from the Job Blog page
  Verifying all the fields
  Verifying all the searched Job blogs

  Scenario Outline: Get into search Job Blog Page
    Given Get into Job page
    When user enters the "<Keyword>" and "<Location>"
    And User click the search button "<Keyword>"
    Then User Should see the filtered "<Keyword>" and "<Location>" Job Listing
    Examples:
      | Keyword | Location |
      | IT | United Kingdom |
      | Software | United States |