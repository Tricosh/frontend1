import React, {Component} from 'react';
import { connect } from 'react-redux';

import { bookAddGenre } from './actions';

export class Genre extends Component {
	
	constructor(props) {
		super(props)
		
		{/*this.onAddGenre = this.onAddGenre.bind(this);*/}	
	}
	
	{/*onAddGenre(e) {
		e.preventDefault();
		fetch('genre').then(function(res) {
			return res.json();
			}).then((data) => {
				this.props.dispatch(bookAddGenre(data));
		});
	}*/}
		
	render() {
		return (
			<div className='genre'>
			{/*{this.state.genre.map(el => (
				<div key={el.key} onClick={() => this.onAddGenre}>{el.name}</div>
			))}*/}
			</div>
		)
	}
}

function mapStateToProps(state) {

	return {
		genres: [...state.genres]
	}
}

export default connect(mapStateToProps) (Genre);