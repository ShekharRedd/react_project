import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './home';
// import About from './about';
import Practise from './Practise';
import Home from './Home';
import Header from './Header';


function Route_1() {

	return (
	<Router>
		
		<Header />
		<div className="App">
		<Link to="/">Home</Link> <br></br>
		<Link to="/about" >About Us</Link>
		
		<Routes>
		<Route exact path="/" element={<Home />} />
	
		<Route exact path='/about' element={<Practise />}></Route>

		</Routes>
		<p>Copy & Rights</p>
		</div>
	</Router>
);

}

export default Route_1;