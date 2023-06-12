import React from 'react';
import Header from './components/Header/Header';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
};

export default App;
