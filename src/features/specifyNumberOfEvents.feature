Feature: Specify number of events

Scenario:
Given the app loaded,
When user opens the app
Then a list of 32 events will appear.

Scenario:
Given the list of 32 events appeared,
When user clicks on “change number of events shown” and a number
Then the event list will show events in the number that user selected.