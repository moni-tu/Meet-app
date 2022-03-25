import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/show-hideEventDetails.feature');

// Feature: Show/hide an event's details
defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is on the main page of the app', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
        });

        when('an event is displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('the event details will be collapsed.', () => {
            expect(AppWrapper.find('.show-events')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the event list loaded,', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
        });

        when('user clicks on “show details” button of one of them', () => {
            AppWrapper.find('.show-details').at(0).simulate('click');
        });
        
        then('the event element will be expanded to show the element details.', () => {
            expect(AppWrapper.find('.event__moreDetails')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the event element has expanded,', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.show-details').at(0).simulate('click');
            expect(AppWrapper.find('.event__moreDetails')).toHaveLength(1);
        });

        when('user clicks on “hide details” button of one of them', () => {
            AppWrapper.find('.hide-details').at(0).simulate('click');
        });

        then('the event element will collapse to hide the element details.', () => {
            expect(AppWrapper.find('.event__moreDetails')).toHaveLength(0);
        });
    });

});