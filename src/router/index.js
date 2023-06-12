import React from "react";
import Catalog from "../pages/Catalog";
import {CATALOG_ROUTE, MAIN_ROUTE, USER_DETAILS_ROUTE} from "../untils/consts";
import About from "../pages/About";
import UserDetails from "../pages/UserDetails";


export const publicRoutes = [
    {path: MAIN_ROUTE, component: <Catalog/>},
    {path: CATALOG_ROUTE, component: <About/>},
    {path: USER_DETAILS_ROUTE, component: <UserDetails/>},
    /*{path: ERROR_ROUTE, component: <Page404/>, exact: true},
    {path: OTHER_ROUTE, component: <Navigate to="/error-page" />, exact: true},*/
]