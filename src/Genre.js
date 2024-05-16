import React, {Component} from 'react';

import Books from "./Books";

export class Genre extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			genre: [
				{
					key: 'all',
					name: 'Все'
				},
				{
					key: 'приключения',
					name: 'Приключения'
				},
				{
					key: 'детектив',
					name: 'Детектив'
				},
				{
					key: 'хоррор',
					name: 'Хоррор'
				},
				{
					key: 'детское',
					name: 'Детское'
				}
			]
		}
	}
	render() {
		return (
			<div className='genre'>
			{this.state.genre.map(el => (
			<div key={el.key} onClick={() => this.props.book(el.key)}>{el.name}</div>
			))}
			</div>
		)
	}
} 

export default (Genre);