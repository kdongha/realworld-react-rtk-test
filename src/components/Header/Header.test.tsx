import React from 'react';
import { render, screen } from 'utils/test-utils';
import Header from './Header';
import { UserState } from 'features/user/userSlice';

const preloadedState: { user: UserState } = {
    user: {
        user: {
            email: 'test@gmail.com',
            token: 'test_token',
            username: 'test',
        },
        status: 'idle',
    },
};

test('renders Logo button', () => {
    render(<Header />);
    const logoElement = screen.getByText('conduit');
    expect(logoElement).toBeInTheDocument();
});

test('renders Home button', () => {
    render(<Header />);
    const homeElement = screen.getByText('Home');
    expect(homeElement).toBeInTheDocument();
});

test('renders New Article button', () => {
    render(<Header />, { preloadedState });
    const newArticleElement = screen.getByText('New Article');
    expect(newArticleElement).toBeInTheDocument();
});

test('renders Settings button', () => {
    render(<Header />, { preloadedState });
    const settingsElement = screen.getByText('Settings');
    expect(settingsElement).toBeInTheDocument();
});

test('renders Sign in button', () => {
    render(<Header />);
    const signInElement = screen.getByText('Sign in');
    expect(signInElement).toBeInTheDocument();
});

test('renders Sign up button', () => {
    render(<Header />);
    const signInElement = screen.getByText('Sign up');
    expect(signInElement).toBeInTheDocument();
});
