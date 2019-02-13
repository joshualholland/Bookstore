import * as React from 'react';
import { json } from '../utils/api';
import BookCard from './BookCard';

export default class Books extends React.Component<IBooksProps, IBooksState> {
    constructor(props: IBooksProps) {
        super(props)
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        try {
            let books = await json('/api/books');
            this.setState({ books: books});
        } catch (e) {
            console.log(e)
        }
    }

    returnBooks() {
        return(
            this.state.books.map((book) => {
                return (
                    <BookCard book={book} key={book.id} />
                )
            })
        )
    }

    render() {
        return (
            <div className="container">
                {this.returnBooks()}
            </div>
        )
    }
}


interface IBooksProps {};
interface IBooksState {
    books: {
        title: string,
        author: string,
        category: string,
        price: number,
        id: number
    }[]
};