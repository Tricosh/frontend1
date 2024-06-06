import React, {Component} from 'react';
import { connect } from 'react-redux';

import { bookSelectGenre } from './actions';

export class Genre extends Component {
	
	constructor(props) {
		super(props)
		
		this.onSelectGenre = this.onSelectGenre.bind(this);	
	}
	
	onSelectGenre(e, genre) {
		e.preventDefault();
        this.props.dispatch(bookSelectGenre(genre));
	}
		
	render() {
		return (
			<div className='genre'>
			{this.props.genres.genres.map(genre => (
				<div key={genre} onClick={(e) => this.onSelectGenre(e, genre)}>{genre}</div>
			))}
			</div>
		)
	}
}

function mapStateToProps(state) {

	return {
		genres: {...state.genres}
	}
}

export default connect(mapStateToProps) (Genre);