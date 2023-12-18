import React, { SyntheticEvent, useState } from 'react';
import { Link, redirect } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRePassword] = useState('');
    const [redirect_to, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/signup/', {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                name,
                surname,
                password,
                re_password
            })
        });

        const content = await response.json();
        console.log(content);

        if (redirect_to) {
            return redirect("/login");
        }

        setRedirect(true);
    }


    return (
        <div className='container mt-5'>
            <h1>Регистрация пользователя</h1>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='name'
                        placeholder='Имя'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <br />
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='surname'
                        placeholder='Фамилия'
                        name='surname'
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        required
                    />
                </div>
                <br />
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
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Подтверждение пароля'
                        name='re_password'
                        minLength={6}
                        value={re_password}
                        required onChange={e => setRePassword(e.target.value)}
                    />
                </div>
                <br />
                <button className='btn btn-primary' type='submit'>Зарегестрироваться</button>
            </form>
            <p className='mt-3'>
                Есть аккаунт? <Link to='/login'>Войти</Link>
            </p>
            <p className='mt-3'>
                Вернуться <Link to='/home'>на приветственную страницу</Link>
            </p>
            {/* <p className='mt-3'>
                Забыли пароль? <Link to='/reset-password'>Сменить пароль</Link>
            </p> */}
        </div>
    );
};

export default Registration;
