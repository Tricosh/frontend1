import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Book from './Book';
import BookDetail from "./BookDetail";


export class Books extends Component {
	
	render() {
		return (
			<main>
			{this.props.books.map((book) => (
				<Book book={book} key={book._id}/>
			))}
			</main>
		)
	}
} 
function mapStateToProps(state) {

	return {
		books: [...state.books]
	}
}

export default connect(mapStateToProps)(Books);