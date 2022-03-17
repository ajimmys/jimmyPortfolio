import { render, screen } from '@testing-library/react';
import BiographyContainer from './Containers/BiographyContainer';

test('renders learn react link', () => {
  render(<BiographyContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
