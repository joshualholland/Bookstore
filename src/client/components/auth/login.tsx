import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json, SetAccessToken, User } from '../../utils/api';

export default class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props)
        this.state = {
            email: null,
            password: null,
            status: null
        }
    }

    private saving: boolean = false;
    private alert: JSX.Element = null;

    async componentDidMount() {
        if (User && User.role === 'admin') {
            this.props.history.push('/admin')
        }
    }

    async login(e: any) {
        e.preventDefault();

        if (this.saving) return;

        let user: { email: string, password: string } = {
            email: this.state.email,
            password: this.state.password,
        };
        try {
            this.saving = true;
            let result = await json('/auth/login', 'POST', user)

            if (result) {
                this.setState({ status: 'Success'})
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if (result.role === 'admin') {
                    this.props.history.push('/admin')
                } else {
                    this.props.history.push('/')
                }
            } else {
                this.setState({ status: 'Error'})
            }
        } catch (e) { throw e }
    }

    render() {

        if (this.state.status === 'Success') {
            this.alert = <div className='alert alert-danger p-1 m-3' role='alert'>Log in Successful.</div>
        } else if (this.state.status === 'Error') {
            this.alert = <div className='alert alert-primary p-1 m-3' role='alert'>Error Logging in</div>
        }

        return (
            <>
                <main className='container'>
                    <section className='row my-3'>
                        <div className="col-md-12">
                            <form className='form-group bg-secondary rounded shadow-lg' onSubmit={(e) => this.login(e)}>
                                <label className='text-primary'>Email</label>
                                <input
                                    type='email'
                                    className='form-control mb-3'
                                    value={this.state.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                                <label className='text-primary'>Password</label>
                                <input
                                    type='password'
                                    className='form-control mb-3'
                                    value={this.state.password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                                <div className='text-center'>
                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </div>
                            </form>
                            <Link to='/register' className='text-primary'>Not a registered user? Register Here!</Link>
                            {this.alert}
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

interface ILoginProps extends RouteComponentProps { };
interface ILoginState {
    email: string,
    password: string,
    status: string
};
