export const BOOK_ADD_ALL = 'BOOK_ADD_ALL'
export const BOOK_FINDONE = 'BOOK_FINDONE'
export const BOOK_ADD_GENRE = 'BOOK_ADD_GENRE'

export function bookAddAll(books_list) {
	return { type: BOOK_ADD_ALL, books_list };
}

export function bookAddGenre(genres_list) {
	return { type: BOOK_ADD_GENRE, genres_list };
}

export function bookfindOne(_id) {
	return { type: BOOK_FINDONE, _id};
}
