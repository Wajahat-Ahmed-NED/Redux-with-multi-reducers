import { Home, About } from "./approuter";
import React from "react";
import {
    BrowserRouter as Router,
    Routes, Route,

} from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

            </Routes>

        </Router>
    );
}