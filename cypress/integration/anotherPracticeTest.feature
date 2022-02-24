Feature: Automation QA Practice
    

    @TestAcceptance
    Scenario: I verify the subscription page
    Given I open ultimateqa homepage
    When I search for Cypress course in the search bar
    Then I select a course 

    Scenario: Verify that the toggle is open
    Given I open ultimateqa homepage
    When I click on Interactions with simple elements link
    And I click on the Open toggle to read text
    Then I verify that the toggle has been opened 

    Scenario: Verify different assertions
    Given I open ultimateqa homepage
    When I click on Interactions with simple elements link
    And I select the first radio button Male
    And I select the Opel from the dropdown
    Then I assert that both of my selections are true




 