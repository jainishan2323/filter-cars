import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import List from 'pages/List';
import Details from 'pages/Details';
import NotFound from 'pages/NotFound';
import AppLayout from 'components/AppLayout';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<List />} />
                    <Route path="/details/:stockNumber" element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}