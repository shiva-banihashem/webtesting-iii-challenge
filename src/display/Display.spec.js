// Test away!
import React from 'react';
import Display from "./Display";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);


describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('open and unlocked', () => {
        const { getByText } = render(<Display closed = {false} locked = {false} />);

        // checking for correct text
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i);


        //checking for correct colors via css classes
        expect(unlock).toHaveClass('green-led');
        fireEvent.click(unlock);

        expect(unlock.className).toMatch(/green-led/i);

        // checking if the correct text does not show up in the doc
        expect(getByText(/open/i))
    });

    it('closed and unlocked', () => {
        const {getByText} = render(<Display closed={true} locked={false}/>);

        // checking for correct text
       const unlock = getByText(/unlocked/i);
        const closed = getByText(/closed/i);



    });

    it('closed and locked', () => {
        const {getByText} = render(<Display closed={true} locked={true}/>);

        // checking for correct text
        const locked = getByText(/locked/i);
        const closed = getByText(/closed/i);

        expect(locked).toHaveClass('red-led');

    });

});
