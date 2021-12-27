import React from 'react';

import './signin.styles.scss';

//import components
import CustomButton from '../../components/custom-button/CustomButton.component';

//import img
import Naruto from '../../assets/naruto.jpg';

const SignIn = () => (
    <div className='signin'>
        <div className="img-container">
            <div className="darken"></div>
        </div>
        <div className="form-container">
            <div className='inner'>
                <h1><span className="text-primary">Sign</span> In</h1>
                <p>Sign in using email and password.</p>

                <form className='form'>
                    <div className='form-body'>
                        <label>Email : </label>
                        <input type="text" className="form-input" placeholder='Enter Email' />
                    </div>
                    <div className='form-body'>
                        <label>Password : </label>
                        <input type="text" className="form-input" placeholder="Enter Password" />
                    </div>

                    <CustomButton className="submit-btn" primary>Submit</CustomButton>
                </form>

                <div className="button">
                    <CustomButton google>Sign in with Google</CustomButton>
                </div>
            </div>
        </div>
    </div>
)

export default SignIn;