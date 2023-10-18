import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content1 from '../mobilePage/content1';
import MobileLayout from '../mobilePage/latout';

function MobileRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MobileRouters;