import { Query } from '../index';

const getBooks = () => Query(`SELECT * FROM books`);

const getBook = (id: number) => Query(`SELECT * FROM books WHERE id = ${id}`);

const addBook = (columns: any, values: any[]) => Query(`INSERT INTO books (${columns}) VALUES(?)`, values);

const editBook = (updatedBook: string, id: number) => Query(`UPDATE books SET ${updatedBook} WHERE id = ${id}`);

const deleteBook = (id: number) => Query(`DELETE FROM books WHERE id = ${id}`);

export default {
    getBook,
    getBooks,
    addBook,
    editBook,
    deleteBook
};