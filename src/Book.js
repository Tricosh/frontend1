import React, {Component} from 'react';
import { connect } from 'react-redux';

import BookDetail from "./BookDetail";
import { bookOrder } from './actions';

export class Book extends Component {
	
	constructor(props) {
    super(props);
    }

		
	render() {
		return (
			<div className='book'>
				<img src={"./img/" + this.props.book.picture}  />
				<h2>{this.props.book.title}</h2>
				<p>{this.props.book.author}</p>
				
				<p><a href={"/book?id="+this.props.book._id} className='add-to'>детали</a></p>
				
			</div>
		)
	}
} 

export default connect()(Book);