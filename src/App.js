import React from 'react';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Menu from "./Menu";
import Books from "./Books";
import { bookAddAll } from './actions';
import Genre from "./Genre";

class App extends React.Component {
  
  componentDidMount() {
	  
		fetch('books').then(function(res) {
			return res.json();
			}).then((data) => {
				this.props.dispatch(bookAddAll(data));
		});
	}
	
 render() {
	  return (
		<div className="wrapper">
		<Menu />
		<Genre />
			<Provider store={this.props.store}>
				<Router>
					<Routes>
						<Route path="/" element={<Books />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	  );
	}
}

export default connect()(App);
