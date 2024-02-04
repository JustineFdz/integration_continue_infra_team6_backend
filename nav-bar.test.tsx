import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './navbar';
import { auth } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

jest.mock('@clerk/nextjs', () => ({
  auth: jest.fn().mockReturnValue({ userId: 'test-user-id' }),
}));

jest.mock('@/lib/prismadb', () => ({
  store: {
    findMany: jest.fn().mockResolvedValue([{ name: 'Store 1' }, { name: 'Store 2' }]),
  },
}));

test('renders the Navbar with expected elements', async () => {
  render(<Navbar />);

  // Check for presence of main elements
  const storeSwitcher = await screen.findByTestId('store-switcher');
  const mainNav = await screen.findByTestId('main-nav');
  const userButton = await screen.findByTestId('user-button');

  expect(storeSwitcher).toBeInTheDocument();
  expect(mainNav).toBeInTheDocument();
  expect(userButton).toBeInTheDocument();

  // Check for correct store data
  expect(storeSwitcher).toHaveTextContent('Store 1, Store 2');
});

test('redirects to sign-in page if user is not authenticated', async () => {
  auth.mockReturnValue({ userId: null });

  render(<Navbar />);

  expect(auth).toHaveBeenCalledTimes(1);
  // Check for redirection (implementation depends on how you handle redirection in your tests)
});
