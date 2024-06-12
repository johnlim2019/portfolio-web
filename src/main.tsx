import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme.ts';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider defaultColorScheme='dark' theme={theme}>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode >
)
