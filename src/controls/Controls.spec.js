// Test away!

import React from 'react';
import Controls from "./Controls";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });
    it('open and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

       const { getByText } = render (<Controls closed={false} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>);
       const closeBtn = getByText(/close gate/i);
       const lockBtn = getByText(/lock gate/i);

       // checking "when disabled" properties
       expect(closeBtn.disabled).toBeFalsy();
       expect(lockBtn.disabled).toBeTruthy();

       // clicking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();

        
    });

    it('closed and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render (<Controls closed={true} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>);
        const closeBtn = getByText(/open gate/i);
        const lockBtn = getByText(/lock gate/i);

        // checking "when disabled" properties
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeFalsy();

        // clicking button click events
        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
        
        
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();

        
    });

    it('closed and locked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render (<Controls closed={true} locked={true} toggleClosed={closeSpy} toggleLocked={lockSpy}/>);
        const closeBtn = getByText(/open gate/i);
        const lockBtn = getByText(/unlock gate/i);

        

        // clicking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).not.toBeCalled();
        
        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
        // checking "when disabled" properties
        expect(closeBtn.disabled).toBeTruthy();
        expect(lockBtn.disabled).toBeFalsy();

        
    });
});