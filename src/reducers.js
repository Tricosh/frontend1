import {combineReducers} from 'redux';

import {BOOK_ADD_ALL, BOOK_FINDONE, BOOK_ADD_GENRE, BOOK_SELECT_GENRE, BOOK_ORDER} from './actions';

function books(state = [], action) {
	switch (action.type) {
		case BOOK_ADD_ALL:
			return [
				...action.books_list
			]
			case BOOK_ORDER:
			return {
                ...state,
                selected: action._id
            }  
		case BOOK_FINDONE:
			return state.filter(function(book) {
				  return book._id === action._id;
			  })
			  
		default: 
		  return state
		
	}
}

function genres(state = {selected: 'Все', genres: []}, action) {
	switch (action.type) {
		case BOOK_ADD_GENRE:
			return {
                ...state,
                genres: [...action.genres_list]
            }    
        case BOOK_SELECT_GENRE:
			return {
                ...state,
                selected: action.genre
            }  
		default: 
		  return state
	}
}

export default combineReducers({
	books: books,
	genres: genres
})