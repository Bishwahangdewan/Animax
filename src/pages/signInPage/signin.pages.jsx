import React, { useState } from 'react';

//import react-router-components
import { Link } from 'react-router-dom';

//import firebase services
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';

//import styles
import './signin.styles.scss';

//import components
import CustomButton from '../../components/custom-button/CustomButton.component';
import Loader from '../../components/loader/loader.component';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [loaderOn, setLoaderOn] = useState(false);

    //handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        //check for empty fields
        if (email === '' || password === '') {
            setErrMessage('Please fill in all the fields');
            return;
        }

        //sign in user
        try {
            //in order to use await the function directly enclosing it should be async
            setLoaderOn(true);
            setTimeout(async () => {
                const signedUser = await signInWithEmailAndPassword(auth, email, password);
                console.log(signedUser);
                setLoaderOn(false);
            }, 1000)

        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <div className="signin-container">
            {loaderOn ? <Loader /> : ''}
            <div className='signin'>
                <div className="img-container">
                    <div className="darken"></div>
                </div>
                <div className="form-container">
                    <div className='inner'>
                        <h1><span className="text-primary">Sign</span> In</h1>
                        <p>Sign in using email and password.</p>

                        <form className='form' onSubmit={(e) => handleSubmit(e)}>
                            <div className='form-body'>
                                <label>Email : </label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-input" placeholder='Enter Email' value={email} />
                            </div>
                            <div className='form-body'>
                                <label>Password : </label>
                                <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" value={password} />
                            </div>

                            {errMessage ?
                                <p className='err-message'><sup>*</sup> {errMessage}</p> : ''
                            }

                            <CustomButton className="submit-btn" primary>Submit</CustomButton>
                        </form>

                        <p className='no-acc'>Dont' have an Account ? <Link className="primary-link" to="signup">Sign up</Link> here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;