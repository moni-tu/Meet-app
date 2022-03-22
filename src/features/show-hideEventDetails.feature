Feature: Show/hide events details

Scenario:
Given the event list loaded,
when user clicks on “show details” button of one of them
then the event element will be expanded to show the element details.

Scenario:
Given the event element has expanded,
When user clicks on “hide details” button of one of them
Then the event element will collapse to hide the element details.