Feature: Specify number of events

Scenario: The app should display 32 events by default
    Given the app loaded,
    When user opens the app
    Then a list of 32 events will appear.

Scenario: When the user types a number into the textbox, the number of events displayed should match the input number
    Given the list of 32 events appeared,
    When user changes the number if events in the box
    Then the event list will show a number of events that should match in the number that the user selected.