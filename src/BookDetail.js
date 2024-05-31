import React, {Component} from 'react';
import { connect } from 'react-redux';

import Book from './Book';

export class BookDetail extends Component {
	
	render() {
		return (
			<div className='bookdetail'>
				<div>
					<img src={"./img/" + this.props.book.picture} onClick={() => this.onbookfindOne(this.props.book)} />
					<h2>{this.props.book.title}</h2>
					<p>{this.props.book.author}</p>
					<b>{this.props.book.years}</b>
					<div className='add-to'>Зарезервировать</div>	
				</div>
			</div>
		
		)
	}
} 

export default connect()(BookDetail);