import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Book from './Book';
import BookDetail from "./BookDetail";


export class Books extends Component {
	
	render() {
		return (
			<main>
			{this.props.books.filter((book) => book.genre === this.props.genre || this.props.genre === 'Все').map((book) => (
				<Book book={book} key={book._id} onAddOrder={this.props.onAddOrder}/>
			))}
			</main>
		)
	}
} 
function mapStateToProps(state) {

	return {
		books: [...state.books],
		genre: state.genres.selected
	}
}

export default connect(mapStateToProps)(Books);