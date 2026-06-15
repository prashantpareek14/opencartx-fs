import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('it renders heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it('it renders text', () => {
    render(<Page />);

    const element = screen.getByText(/Hello There, Welcome to OpenCartX, an ecommerce web app build with next js/i);

    expect(element).toBeInTheDocument();
  });
});


/*describe('Page', () => {
  test('renders heading', () => {
    // 3 A's

    // Arrange
    render(<Page />);

    // Act
    // ...nothing

    const heading = screen.getByRole('heading', { level: 1 });

    // Assert
    expect(heading).toBeInTheDocument();
  });
});*/

// NOTE: test and it methods are aliases, use them as per readability preference


// single test
/*test('renders heading', () => {
  // 3 A's

  // Arrange
  render(<Page />);

  // Act
  // ...nothing

  const heading = screen.getByRole('heading', { level: 1 });

  // Assert
  expect(heading).toBeInTheDocument();
});*/
