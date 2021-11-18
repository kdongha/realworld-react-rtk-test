import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
