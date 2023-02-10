import { render, screen } from '@testing-library/react';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

test('renders learn react link', () => {
  render(<Auth0Provider>
    <App />
  </Auth0Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
