/* eslint-disable react/react-in-jsx-scope */
// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })
// App.test.js

import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

test('renders loading spinner', () => {
  render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <Provider store={store}>
      <App />
    </Provider>,
  )
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
})
