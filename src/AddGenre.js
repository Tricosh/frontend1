import React, {Component} from 'react';
import { connect } from 'react-redux';

import { todoAdd } from './actions';

export class AddGenre extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			name: ''
		};
		
		this.onAddGenre = this.onAddGenre.bind(this);
	}
	
	onAddGenre(e) {
		e.preventDefault();
		
		fetch('categories', {
			method: "POST",
			body: JSON.stringify({ name: this.state.name }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json()).then((data) => {
			this.props.dispatch(todoAdd(data.id, data.genre));
			this.props.history('/');
		});
	}
} 

export default connect() (AddGenre);