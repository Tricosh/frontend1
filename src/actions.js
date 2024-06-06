export const BOOK_ADD_ALL = 'BOOK_ADD_ALL'
export const BOOK_FINDONE = 'BOOK_FINDONE'
export const BOOK_ADD_GENRE = 'BOOK_ADD_GENRE'
export const BOOK_SELECT_GENRE = 'BOOK_SELECT_GENRE'
export const BOOK_ORDER = 'BOOK_ADD_ORDER'

export function bookAddAll(books_list) {
	return { type: BOOK_ADD_ALL, books_list };
}

export function bookAddGenre(genres_list) {
	return { type: BOOK_ADD_GENRE, genres_list };
}

export function bookSelectGenre(genre) {
	return { type: BOOK_SELECT_GENRE, genre };
}

export function bookOrder(_id) {
	return { type: BOOK_ORDER, _id };
}

export function bookfindOne(_id) {
	return { type: BOOK_FINDONE, _id};
}
