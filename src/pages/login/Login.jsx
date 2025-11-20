import React from 'react'
import "./Login.css"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';

function Login() {
    return (
        <>
            <section className="signUp">
                <div className="container">
                    <div className="signUp_img">
                        <img src="/img/singup.png" alt="" />
                    </div>
                    <div className="signUp_info">
                        <h1>Log in to Exclusive</h1>
                        <h4>Enter your details below</h4>
                        <TextField className="standard_basic" label="Email or Phone Number" variant="standard" />
                        <TextField className="standard_basic" label="Password" variant="standard" />


                        <div className="login_part">
                            <Button className='btn_loginPages' variant='outlined'> Log In</Button>

                            <Button className='btn_login' variant='text'> Forget Password?</Button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login
