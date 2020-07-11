Feature:In the Job Blog
  Verifying fields and checking retrieved searched Job blogs

  Scenario Outline: Navigating to the Filtered Job Page
    Given Job page is Loaded
    And user enters the "<Keyword>" and "<Location>" in the particular search fields
    Then After clicking the search button Verifying the Filtered "<Keyword>"
    And User Should see the filtered "<Keyword>" and "<Location>" Job Listing
    Examples:
      | Keyword | Location |
      | DEVELOPER | United Kingdom |
      | IT | United States |