/* eslint-disable react/react-in-jsx-scope */
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
