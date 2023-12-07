import React, { useState } from "react";

export const RegistrationPage = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Регистрация</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Имя</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"/>
            <label htmlFor="surname">Фамилия</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} id="surname"/>
            <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Sign up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Уже есть аккаунт? Войти</button>
    </div>
    )
}