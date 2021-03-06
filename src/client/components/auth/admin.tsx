import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { json } from '../../utils/api';

export default class Admin extends React.Component<IAdminProps, IAdminState> {
    constructor(props: IAdminProps) {
        super(props)
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        try {
            let data = await json('/api/books');
            this.setState({ books: data })
        } catch (e) { console.log(e) }
    }

    async deleteBook(id: number) {
        try {
            await json(`/api/books/${id}`, 'DELETE');
        } catch (e) { console.log(e) }
    }

    returnBooks() {
        return (
            this.state.books.map((book) => {
                return (
                    <div className="card m-3" style={{ width: '18' + 'rem', display: 'inline-block' }}>
                        <div className="card-body">
                            <h3 className="card-title">{book.title}</h3>
                            <h5 className='card-text'>{book.author}</h5>
                            <p className='card-text'>{book.category}</p>
                            <p className='card-text'>{book.price}</p>
                        </div>
                        <Link to={`/edit/${book.id}`} className='btn btn-sm btn-primary'>Edit this Book</Link>
                        <button className='btn btn-sm btn-outline-danger' onClick={() => this.deleteBook(book.id)}>Delete</button>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <>
            <h3 className='text-primary'>Need to post a book? Click <Link className='text-primary' to='/post'>Here</Link></h3>
            <div className="container">
                {this.returnBooks()}
            </div>
            </>
        )
    }

}

interface IAdminProps extends RouteComponentProps<{ id: string }> { };
interface IAdminState {
    books: any[]
};