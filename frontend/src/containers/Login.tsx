import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

    const response = await fetch('http://localhost:8000/api/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
    });

    const content = await response.json();
    console.log(content);

    return (
        <div className='container mt-5'>
            <h1>Вход в аккаунт</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Пароль'
                        name='password'
                        minLength={6}
                        value={password}
                        required onChange={e => setPassword(e.target.value)}            
                    />
                </div>
                <br />
                <button className='btn btn-primary' type='submit'>Войти</button>
            </form>
            <p className='mt-3'>
                Нет аккаунта? <Link to='/signup'>Зарегестрироваться</Link>
            </p>
            <p className='mt-3'>
                Забыли пароль? <Link to='/reset-password'>Сменить пароль</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);