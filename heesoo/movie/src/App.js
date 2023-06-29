import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/movie/:id' element={<Detail />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
