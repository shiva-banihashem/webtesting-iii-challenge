// Test away

import React from 'react';
import Dashboard from "./Dashboard";
import { render, cleanup, fireEvent } from '@testing-library/react/pure';
import '@testing-library/jest-dom/extend-expect';

describe('<Dashboard />', () => {
    beforeEach(cleanup);
    it('renders without crashing', () => {
        render(<Dashboard/>);
    });
});

describe("<Dashboard /> state transitions", () => {
    // object destructured so it's usable throughout the testing app
    const { getByText } = render(<Dashboard />);

    it('default state: open and unlocked', () => {
        
        getByText(/open/i);    
        getByText(/unlocked/i);

        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

    it('open and unlocked to close and unlocked', () => {
        const closeBtn = getByText(/close gate/i);
        fireEvent.click(closeBtn);

        // check display 
        getByText(/closed/i);
        getByText(/unlocked/i);

        // check button 
        getByText(/lock gate/i);
        getByText(/open gate/i);
    });

    it('open and unlocked to close and locked', () => {
        const lockBtn = getByText(/lock gate/i);
        fireEvent.click(lockBtn);

        // check display 
        getByText(/closed/i);
        getByText(/locked/i);

        // check button 
        getByText(/unlock gate/i);
        getByText(/open gate/i);
    });

    it('open and locked to close and unlocked', () => {
        const lockBtn = getByText(/unlock gate/i);
        fireEvent.click(lockBtn);

        // check display 
        getByText(/closed/i);
        getByText(/unlocked/i);

        // check button 
        getByText(/lock gate/i);
        getByText(/open gate/i);
    });

    it('open and locked to open and unlocked', () => {
        const openBtn = getByText(/open gate/i);
        fireEvent.click(openBtn);

        // check display 
        getByText(/open/i);
        getByText(/unlocked/i);

        // check button 
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });
});