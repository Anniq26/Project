import React from "react";
import MainPage from "./pages/MainPage";
import LinkLayout from "./layouts/LinkLayout";
import { Link, Route, Routes } from "react-router-dom";
import CollectionsPage from "./pages/CollectionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

const router = [
   
    {
        element: <LinkLayout/>,
        path: '/',
        children: [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <MainPage/>,
                path:'/main',
            },
            {
                element: <CollectionsPage/>,
                path: '/collections'
            },
            {
                element:<AboutUsPage/>,
                path:'/aboutus'
            },
            {
                element:<ContactPage/>,
                path:'/contact'
            }
        ]
    }
]

export default router