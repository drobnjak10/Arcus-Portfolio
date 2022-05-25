import { useState } from 'react'
import './Login.scss'
import { useAuth } from '../../AuthContext';
import { UserActions } from '../../constants';
import { postApiRequest } from '../../apiCalls';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { state, dispatch } = useAuth();

    const handleClick = async () => {
        const response = await postApiRequest({ email, password }, '/user/login')

        if(response.token) {
            const cookies = new Cookies();
            cookies.set('access_token', response.token);
            dispatch({ type: UserActions.LOGIN, payload: response })
        }
    }

    return (
        <div className='section login'>
            <div className="row">
                <div className="left">

                </div>
                <div className="right">
                    <div className="form-wrapp">
                        <h3 className='link'>Arcus Design</h3>
                        <h4>Login</h4>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label> <br />
                                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label> <br />
                                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button className="login-btn" onClick={handleClick}>
                                Login
                            </button>
                        </div>
                        <div className="go-back">
                            <Link to="/">Go to the site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login