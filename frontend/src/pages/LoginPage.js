import { Link } from 'react-router-dom'
import React from 'react'

const LoginPage = () => {
    // let {loginUser} = useContext(AuthContext)
    return (
        <div className='container mt-5'>
            <h1>Вход в аккаунт</h1>
            <form onSubmit>
                <div className='form-group'>
                    <input className='form-control' type='email' name='email' placeholder="email"/>
                </div>
                <br/>
                <div className='form-group'>
                    <input type="password" name="password" placeholder="Пароль" className='form-control'/>
                </div>
                <br/>
                <button className='btn btn-primary' type='submit'>Войти</button>
            </form>

            <p className='mt-3'>
                Нет аккаунта? <Link to='/signup'>Зарегестрироваться</Link>
            </p>
            <p className='mt-3'>
                Вернуться <Link to='/home'>на приветственную страницу</Link>
            </p>
            {/* <p className='mt-3'>
                Забыли пароль? <Link to='/reset-password'>Сменить пароль</Link>
            </p> */}

        </div>
    )
}

export default LoginPage