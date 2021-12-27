import React from 'react';

import { Link } from 'react-router-dom';

//import styles
import './signup.styles.scss';

//import components
import CustomButton from '../../components/custom-button/CustomButton.component';

const SignUp = () => (
    <div className='signup'>
        <div className="img-container">
            <div className="darken"></div>
        </div>
        <div className="form-container">
            <div className='inner'>
                <h1><span className="text-primary">Sign</span> Up</h1>
                <p>Sign Up with your Email and Password.</p>

                <form className='form'>
                    <div className='form-body'>
                        <label>Username : </label>
                        <input type="text" className="form-input" placeholder='Enter Email' />
                    </div>
                    <div className='form-body'>
                        <label>Email : </label>
                        <input type="text" className="form-input" placeholder='Enter Email' />
                    </div>
                    <div className='form-body'>
                        <label>Password : </label>
                        <input type="text" className="form-input" placeholder="Enter Password" />
                    </div>
                    <div className='form-body'>
                        <label>Confirm Password : </label>
                        <input type="text" className="form-input" placeholder="Enter Password" />
                    </div>

                    <CustomButton className="submit-btn" primary>Submit</CustomButton>
                </form>
            </div>
        </div>
    </div>
)

export default SignUp;