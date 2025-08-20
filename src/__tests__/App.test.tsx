import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('Show text', () => {
    render(<App />);
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
