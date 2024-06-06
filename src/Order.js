import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Order extends Component {
	
	render() {
		return (
			<div className='book'>
				<img src={"./img/" + this.props.book.picture} />
				<h2>{this.props.book.title}</h2>
				<p>{this.props.book.author}</p>
			</div>
		
		)
	}
} 

export default connect()(Order);