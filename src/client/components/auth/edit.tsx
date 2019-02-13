import * as React from 'react';
import { json } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';

export default class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props)
        this.state = {
            title: null,
            author: null,
            price: null,
            category: null,
            categories: []
        }
    }

    async componentDidMount() {
        try {
            let book = await json(`/api/books/${this.props.match.params.id}`)
            this.setState({ title: book[0].title, author: book[0].author, price: book[0].price, category: book[0].category })

            let categories = await json('/api/categories');
            this.setState({ categories: categories });
        } catch (e) { console.log(e) }
    }

    async editBook(e: any) {
        e.preventDefault();
        let book: any = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            category: this.state.category
        }
        try {
            await json(`/api/books/${this.props.match.params.id}`, 'PUT', book);
            this.props.history.replace('/admin');
        } catch (e) {
            console.log(e)
        }
    }

    renderCategories() {
        return (
            this.state.categories.map((key) => {
                console.log(key.name)
                return (
                    <a className="dropdown-item" onClick={() => this.setState({ category: key.name })}>{key.name}</a>
                )
            })
        )
    }

    render() {
        return (
            <>
                <div className="container">
                    <div>
                        <h5 className='text-primary'>New Title:</h5>
                        <input className='form-control' type='text' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                        <h5 className='text-primary'>New Author:</h5>
                        <input className='form-control' type='text' value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })} />
                        <div>
                            <span className='dropdown-item-text'>Categories</span>
                            {this.renderCategories()}
                        </div>
                        <h5 className='text-primary'>New Price:</h5>
                        <input className='form-control' type='number' value={this.state.price} onChange={(e) => this.setState({ price: e.target.value.replace(/\D/, '') })} />
                    </div>
                    <button className='btn btn-primary' onClick={(e) => this.editBook(e)}>Update Book</button>
                </div>
            </>
        )
    }
}

interface IEditProps extends RouteComponentProps<{ id: string }> { };
interface IEditState {
    title: string,
    author: string,
    price: any,
    category: string,
    categories: any[]
}