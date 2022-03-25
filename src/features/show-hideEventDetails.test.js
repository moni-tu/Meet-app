import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import { extractLocations } from "../api";

const feature = loadFeature('./src/features/show-hideEventDetails.feature');
const locations = extractLocations(mockData);

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user is on the main page of the app', async () => {

        });

        when('an event is displayed', () => {

        });

        then('the event details will be collapsed.', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the event list loaded,', () => {

        });

        when('user clicks on “show details” button of one of them', () => {

        });

        then('the event element will be expanded to show the element details.', () => {

        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the event element has expanded,', () => {

        });

        when('user clicks on “hide details” button of one of them', () => {

        });

        then('the event element will collapse to hide the element details.', () => {

        });
    });

});