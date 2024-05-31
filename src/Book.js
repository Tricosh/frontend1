import React, {Component} from 'react';
import { connect } from 'react-redux';

import { bookfindOne } from './actions';
import BookDetail from "./BookDetail";

export class Book extends Component {
	
	constructor(props) {
    super(props);
      this.onbookfindOne = this.onbookfindOne.bind(this);
    }
  
  onbookfindOne() {

    fetch(`books/${this.props.book._id}`, {
    method: 'GET'
	}).then((response) => {
    return response.json();
	}).then((data) => {
       this.props.dispatch(bookfindOne(this.props.book._id));
    });    
  }
		
	render() {
		return (
			<div className='book'>
				<img src={"./img/" + this.props.book.picture} onClick={() => this.onbookfindOne(this.props.bookdetail)} />
				<h2>{this.props.book.title}</h2>
				<p>{this.props.book.author}</p>
				<div className='add-to'>Зарезервировать</div>
				
			</div>
		)
	}
} 

export default connect()(Book);