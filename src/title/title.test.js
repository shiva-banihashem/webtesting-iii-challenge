import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {initialState ,reducer } from '../reducers/reducer.js'
import Title from './title.js'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    
    store,
  }
}

test('can render with redux with defaults', () => {
  const { getByText } = renderWithRedux(<Title />)
   expect(getByText('Update the title based on your actions for the Gate!!!'))

})

