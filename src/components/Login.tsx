import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../services/LoginService'

//validations with yup
const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
})

interface LoginForm {
    username: string,
    password: string,
    token: string,
    error: string
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: LoginForm, e: any) => {
        console.log(data)
        login(data.username, data.password).then(result => {
            console.log(result)
            if(result.error) {
                e.target.reset(); //reset the form
            } else {
                localStorage.setItem('token', result.token)
                e.target.reset(); //reset the form
                window.location.href = '/';
            }
        })
    };

    return(
        <form onSubmit={handleSubmit<LoginForm>(onSubmit)}>
            <h4>Login</h4>
            <div>
                <input type="text" name="username" id="username"
                    placeholder="Username"
                    ref={register} />
                <span><small>{errors.username?.message}</small></span>
            </div>
            <div>
                <input type="password" name="password" id="password"
                    placeholder="Password"
                    ref={register} />
                <span><small>{errors.structure?.message}</small></span>
            </div>
            <div>
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
        );
}

export default Login;
