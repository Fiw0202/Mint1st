import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content1 from '../pages/content1';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;