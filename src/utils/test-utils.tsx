import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userReducer from 'features/user/userSlice';
import { RootState } from 'store';

function render(
    ui: ReactElement,
    {
        preloadedState,
        store = configureStore({ reducer: { user: userReducer }, preloadedState }),
        ...renderOptions
    }: { preloadedState?: RootState; store?: Store } = {}
) {
    function Wrapper({ children }: { children?: ReactNode }) {
        return (
            <BrowserRouter>
                <Provider store={store}>{children}</Provider>
            </BrowserRouter>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
