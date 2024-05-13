import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Book from './Book';

export class Books extends Component {
	
	render() {
		return (
			<main>
			{this.props.books.map(el => (
				<Book key={el.id} book={el} />
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

export default connect(mapStateToProps) (Books);