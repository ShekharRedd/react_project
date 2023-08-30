import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './home';
// import About from './about';
import Practise from './Practise';
import Home from './Home';


function Route_1() {

	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/Home">Home</Link>
			</li>
			<li>
				<Link to="/about" >About Us</Link>
			</li>
x
			</ul>
		<Routes>
				<Route exact path='/Home' element={<Home />}></Route>
				<Route exact path='/about' element={< Practise />}></Route>

		</Routes>
		</div>
	</Router>
);

}

export default Route_1;