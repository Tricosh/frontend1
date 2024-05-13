import {combineReducers} from 'redux';

import {BOOK_ADD_ALL} from './actions';


function todo(state = [], action) {
	switch (action.type) {
		case BOOK_ADD_ALL:
			return [
				...action.todo_list
			]
		default: 
		  return state
	}
}

export default combineReducers({
	books: todo
})