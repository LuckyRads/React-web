import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import theme from '../providers/theme';
import './App.css';

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                pauseOnHover
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
