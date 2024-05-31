import {combineReducers} from 'redux';

import {BOOK_ADD_ALL} from './actions';
import {BOOK_FINDONE} from './actions';
import {BOOK_ADD_GENRE} from './actions';

function books(state = [], action) {
	switch (action.type) {
		case BOOK_ADD_ALL:
			return [
				...action.books_list
			]		
		case BOOK_FINDONE:
			return state.filter(function(book) {
				  return book._id === action._id;
			  })
			  
		default: 
		  return state
		
	}
}

function genres(state = [], action) {
	switch (action.type) {
		case BOOK_ADD_GENRE:
			return [
				...action.genres_list
			]		
		default: 
		  return state
	}
}

export default combineReducers({
	books: books,
	genres: genres
})