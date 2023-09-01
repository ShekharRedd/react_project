
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Assuming this is your main application component

// ReactDOM.render(<App />, document.getElementById('root'));


// import Practise from './Practise';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom';


// import './index.css';
// Use createRoot to render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/*' element={<App />} />
        </Routes>
    </Router>
);

// root.render(<Practise />);




