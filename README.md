# Meet-app

## Objective

The Meep App is a serverless, progressive web application (PWA) with React build hrough a test-driven
development (TDD) technique. The application uses the Meetup API to fetch upcoming events
for a selected city.

# Features & Requirements

## Technical Requirements

● The app is be a React application.

● The app is be built using the TDD technique

● The app is use the Meetup API and OAuth2 authentication flow.

● The app uses serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.

● The app’s code is hosted in a Git repository on GitHub ### <a href="https://github.com/moni-tu/Meet-app">LIVE DEMO</a>..

● The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.

● The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.

● The app passes Lighthouse’s PWA checklist.

● The app works offline or in slow network conditions with the help of a service worker.

● Users are able to install the app on desktop and add the app to their home screen on mobile.

● The is deployed on GitHub Pages ### <a href="https://moni-tu.github.io/Meet-app/">LIVE DEMO</a>..

● The API call uses React axios and async/await.

● The app implements an alert system using an OOP approach to show information to the user.

● The app makes use of data visualization (recharts preferred).

● The app is covered by tests with a coverage rate >= 90%.

● The app is monitored using an online monitoring tool.

## Reference Features Table

Feature 1: show/hide an event’s details

• Scenario 1: An event element is collapsed by default

• Scenario 2: User can expand an event to see its details

• Scenario 3: User can collapse an event to hide its details

Feature 2: Filter events by city

• Scenario 1: When a user opens the app, a list of events from different cities appears by default

• Scenario 2: When a user searches for a city, the list of events will show events in that city.

Feature 3: Specify number of events

• Scenario 1: When user hasn’t specified a number, 32 is the default number of events displayed

• Scenario 2: User can change the number of events they want to see

Feature 4: Use the app when online

• Scenario 1: Show cached data when there’s no internet connection

• Scenario 2: Show error when user changes the settings (city, time range)

Feature 5: Data visualization

• Scenario 1: Show a chart with the number of upcoming events in each city

## User stories for each feature

• Feature 1 user stories:

As a user, I should be able to expand an event’s details to see those details.

As a user, I should be able to collapse an event’s details to hide those details.

• Feature 2 user stories:

As a user, I should be able to see a list of events from several cities by default.

As a user, I should able to search for a city and see the events happening only in that city.

• Feature 3 user stories:

As a user, I should be able to see a list of events (32) when I open the app to know what is happening in the city.

As a user, I should be able to change the number of events so I can see that number of events.

• Feature 4 user stories:

As a user, I should be able to see cached data to see data when there is no internet connection.

As a user, I should see an error message when changing the settings, so that I cannot change those settings when there is no internet connection.

• Feature 5 user stories:

As a user, I should be able see upcoming events in a chart to get information on those events in each city.

## User story scenarios

• User story 1 scenario:

Given the event list loaded,
when user clicks on “show details” button of one of them
then the event element will be expanded to show the element details.

Given the event element has expanded,
When user clicks on “hide details” button of one of them
Then the event element will collapse to hide the element details.

• User story 2 scenario:

Given the app loaded,
When user opens the app
Then a list of 30 events from different cities will appear.

Given the list of 30 events appeared,
When user searches for a city
Then the event list will show events available in the city that user selected.

• User story 3 scenario:

Given the app loaded,
When user opens the app
Then a list of 30 events will appear.

Given the list of 30 events appeared,
When user clicks on “change number of events shown” and a number
Then the event list will show events in the number that user selected.

• User story 4 scenario:

Given that no internet connection has been provided,
When user opens the app
Then the user will see cached data.

Given that no internet connection has been provided,
When user clicks on “change settings”
Then the error message “it’s not possible to change settings in offline mode” will appear.

- User story 5 scenario:

Given the event list loaded,
When user selects a city
Then the events in that city will appear in a chart.
