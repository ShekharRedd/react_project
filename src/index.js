
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import Mapp from './Mapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
        <Route path='/*' element={<Mapp />} />
    </Routes>
</Router>
);





