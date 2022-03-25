Feature: Show/hide an event's details

Scenario: An event element is collapsed by default.
    Given the user is on the main page of the app
    When an event is displayed
    Then the event details will be collapsed.

Scenario: User can expand an event to see its details
    Given the event list loaded,
    When user clicks on “show details” button of one of them
    Then the event element will be expanded to show the element details.

Scenario: User can collapse an event to hide its details
    Given the event element has expanded,
    When user clicks on “hide details” button of one of them
    Then the event element will collapse to hide the element details.