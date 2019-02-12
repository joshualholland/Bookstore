import { Router } from 'express';
import DB from '../../db';

let router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id
    if (id) {
        try {
            let books = await DB.Books.getBook(id);
            res.send(books);
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    } else {
        try {
            let book = await DB.Books.getBooks();
            res.send(book)
        } catch (e) { 
            console.log(e);
            res.sendStatus(500);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        let book = req.body;
        let columns = Object.keys(book);
        let values = Object['values'](book);
        let result = await DB.Books.addBook(columns, values);
        res.json(result);
    } catch (e) { console.log(e) }
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        await DB.Books.deleteBook(id);
        res.json( { message: 'Book Deleted!' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let book = req.body;
    try {
        let placeHolderColumns = Object.keys(book).map(key => [`${key}="${book[key]}"`]);
        let updatedBook = placeHolderColumns.join(', ');
        await DB.Books.editBook(updatedBook, id);
        res.json({ message: 'book updated!' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;