
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import Mapp from './Mapp';
import Owner from './Owner';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/*' element={<Mapp />} />
        </Routes>
    </Router>
);





