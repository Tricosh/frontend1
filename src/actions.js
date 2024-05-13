export const BOOK_ADD_ALL = 'BOOK_ADD_ALL'

export function bookAddAll(todo_list) {
	return { type: BOOK_ADD_ALL, todo_list };
}