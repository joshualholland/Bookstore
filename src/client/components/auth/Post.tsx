import * as React from 'react';
import { json } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';

export default class Post extends React.Component<IPostProps, IPostState> {
    constructor(props: IPostProps) {
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
            let categories = await json('/api/categories');
            this.setState({ categories });
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

    async handleSubmit(e: any) {
        e.preventDefault();
        let book: any = {
            title: this.state.title,
            author: this.state.author,
            category: this.state.category,
            price: this.state.price
        }
        try {
            await json('/api/books', 'POST', book);
            this.props.history.push('/admin')
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return(
            <main className='container'>
                <section className='row my-3'>
                    <div className="col-md-12">
                        <form className='form-group bg-secondary rounded shadow-lg' onSubmit={(e) => this.handleSubmit(e)}>
                            <label className='text-primary'>Category:</label>
                            <div className='my-auto'>
                                {this.renderCategories()}
                            </div>
                            <label className='text-primary'>Title</label>
                            <input
                                type='text'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} />
                            <label className='text-primary'>Author</label>
                            <input
                                type='text'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} />
                            <label className='text-primary'>Price</label>
                            <input
                                type='number'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value.replace(/\D/, '')  })} />
                            <div className='text-center'>
                                <button type='submit' className='btn btn-primary mb-2'>Post</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface IPostProps extends RouteComponentProps {};
interface IPostState {
    title: string,
    author: string,
    price: any,
    category: string,
    categories: any[]
};