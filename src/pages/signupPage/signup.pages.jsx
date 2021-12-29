import React from 'react';

//import styles
import './signup.styles.scss';

import Loader from '../../assets/loader.gif';

//import firebase services
import { auth, createUserWithEmailAndPassword } from '../../firebase/firebase';

//import components
import CustomButton from '../../components/custom-button/CustomButton.component';

class SignUp extends React.Component {
    constructor() {
        super();

        //state to store user input
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            errmessage: '',
            showLoader: false
        }
    }

    //handle change when user changes its input.
    handleChange(event) {
        //state is set to whtever value user inputs . [] dynamically changes the property of the state depending on the input name and property name.
        this.setState({ [event.target.name]: event.target.value })
    }

    //handle when the form is submitted.
    handleSubmit = async (event) => {
        event.preventDefault();

        const { username, email, password, confirmpassword } = this.state;

        //check for empty fields.
        if (username === '' || email === '' || password === '' || confirmpassword === '') {
            //dont proceed if one field is empty
            this.setState({ errmessage: 'Please fill in all the fields before signing up.' })
            return;
        }

        //check if password's length is more than 6 characters.
        var length = this.state.password.length;

        if (length < 6) {
            this.setState({ errmessage: 'Password length should be more than 6 characters long.' })
            return;
        }

        //check if password and confirmpassword match
        if (password !== confirmpassword) {
            //passwords do not match
            this.setState({ errmessage: 'The Passwords do not match.' })
            return;
        }
        //showloader
        this.setState({ showLoader: !this.state.showLoader })

        try {
            //passwords match - Setup Firebase auth
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            userCredentials.user.displayName = username;
            console.log(userCredentials.user)

            //hide loader
            this.setState({ showLoader: !this.state.showLoader })
        } catch (err) {
            console.log(err.message)
        }

    }

    render() {
        return (
            <div className='signup'>
                {this.state.showLoader ?
                    <div className="loader-bg">
                        <img src={Loader} alt="loader" />
                    </div> : ''}
                <div className="img-container">
                    <div className="darken"></div>
                </div>
                <div className="form-container">
                    <div className='inner'>
                        <h1><span className="text-primary">Sign</span> Up</h1>
                        <p>Sign Up with your Email and Password.</p>

                        <form className='form' onSubmit={(e) => this.handleSubmit(e)}>
                            <div className='form-body'>
                                <label>Username : </label>
                                <input type="text" className="form-input" placeholder='Enter Username' name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className='form-body'>
                                <label>Email : </label>
                                <input type="email" className="form-input" placeholder='Enter Email' name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className='form-body'>
                                <label>Password : </label>
                                <input type="password" className="form-input" placeholder="Enter Password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className='form-body'>
                                <label>Confirm Password : </label>
                                <input type="password" className="form-input" placeholder="Enter Password" name="confirmpassword" value={this.state.confirmpassword} onChange={(e) => this.handleChange(e)} />
                            </div>

                            {this.state.errmessage ?
                                <p className='err-message'><sup>*</sup> {this.state.errmessage}</p>
                                : ''}

                            <CustomButton type="submit" className="submit-btn" primary>SUBMIT</CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;