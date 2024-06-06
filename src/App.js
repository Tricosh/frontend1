import React from 'react';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Menu from "./Menu";
import Books from "./Books";
import Genre from "./Genre";
import BookDetail from "./BookDetail";

import { bookAddAll } from './actions';
import { bookAddGenre } from './actions';

class App extends React.Component {
  
  componentDidMount() {
	  
		fetch('books').then(function(res) {
			return res.json();
			}).then((data) => {
				const genres = [...new Set(data.map(books => books.genre)), 'Все'];
				this.props.dispatch(bookAddAll(data));
				this.props.dispatch(bookAddGenre(genres));
				
		});
	}
	
 render() {
	  return (
		<div className="wrapper">
		<Menu />
			<Provider store={this.props.store}>
				<Genre />
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
