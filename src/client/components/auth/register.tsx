import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../../utils/api';

class Register extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props: IRegisterProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    async handleSubmit(e: any) {
        e.preventDefault();
        let user: any = {
            email: this.state.email,
            password: this.state.password,
        }
        try {
            await json('/auth/register', 'POST', user);
            this.props.history.push('/login')
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        return (
            <main className='container'>
                <section className='row my-3'>
                    <div className="col-md-12">
                        <form className='form-group bg-secondary rounded shadow-lg' onSubmit={(e) => this.handleSubmit(e)}>
                            <label className='text-primary'>Email</label>
                            <input
                                type='email'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                            <label className='text-primary'>Password</label>
                            <input
                                type='password'
                                className='form-control mb-3'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                            <div className='text-center'>
                                <button type='submit' className='btn btn-primary mb-2'>Register</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

interface IRegisterProps extends RouteComponentProps {
}

interface IRegisterState {
    email: string,
    password: string,
};






export default Register;