import React, {Component} from 'react';
import { connect } from 'react-redux';

import BookDetail from "./BookDetail";
import { bookOrder } from './actions';

export class Book extends Component {
	
	constructor(props) {
    super(props);
	
		this.onAddOrder = this.onAddOrder.bind(this);
		orders = []
    }
  
	onAddOrder(e) {
		e.preventDefault();
		alert ('book')
	
	}
 
		
	render() {
		return (
			<div className='book'>
				<img src={"./img/" + this.props.book.picture}  />
				<h2>{this.props.book.title}</h2>
				<p>{this.props.book.author}</p>
				<div className='add-to' onClick{(e) => this.onAddOrder(e)}>Зарезервировать</div>
				
			</div>
		)
	}
} 

export default connect()(Book);