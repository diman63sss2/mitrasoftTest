import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../router";

const AppRouter: React.FC = () => {
    return (
        <div className='content'>
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}>
                    </Route>
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;