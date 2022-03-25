import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('The app should display 32 events by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the app loaded,', async () => {
            AppWrapper = await mount(<App />);
        });

        when('user opens the app', () => {
            AppWrapper.update();
        });

        then('a list of 32 events will appear.', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });

    test('When the user types a number into the textbox, the number of events displayed should match the input number', ({ given, when, then }) => { 
        let AppWrapper;
        given('the list of 32 events appeared,', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        when('user changes the number if events in the box', () => {
            AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: '1' } });
        });

        then('the event list will show a number of events that should match in the number that the user selected.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.numberOfEvents')).toHaveLength(1);
        });
    });


})