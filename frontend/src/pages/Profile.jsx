import React, {SyntheticEvent, useState} from 'react';
import Navbar from '../components/Navbar/Navbar'
import user from '../assets/user.png'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [father_name, setFatherName] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const [date, setDate] = useState('07.03.2003');


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/profile/', {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            father_name,
            name,
            surname,
            password,
            re_password
        })
    });
}
  return (
    <section>

      <Navbar/>
      <MDBContainer className="py-5">


        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={user}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-4">Алиса Синявина</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <h2>Личные данные</h2>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Имя</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Алиса</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Фамилия</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Синявина</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Отчество</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Павловна</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Пол</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Женский</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">sinyavina@mail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Дата рождения</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">07.03.2003</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Аккаунт создан</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">20.11.2023</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                  <form onSubmit={submit}>
                      <div className='form-group'>
                        Имя
                        <input
                          className='form-control'
                          type='name'
                          placeholder='Алиса'
                          name='name'
                          value={name}
                          onChange={e => setName(e.target.value)}
                          required
                        />
                      </div>
                        <br />
                        <div className='form-group'>
                            Фамилия
                            <input
                                className='form-control'
                                type='surname'
                                placeholder='Синявина'
                                name='surname'
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            Отчество
                            <input
                                className='form-control'
                                type='father_name'
                                placeholder='Павловна'
                                name='father_name'
                                value={father_name}
                                onChange={e => setFatherName(e.target.value)}
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                          Пол
                          <select className='form-control'>
                            <option value="woman">Женский</option>
                            <option value="man">Мужской</option>
                          </select>
                        </div>
                        <br />
                        <div className='form-group'>
                          Дата рождения
                          <input name="date" className='form-control' required value={date} onChange={(e) =>setDate(e.target.value)} />
                        </div>
                        <br />
                        <button className='btn btn-primary' type='submit'>Сохранить изменения</button>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                  <h3>Изменить пароль</h3>
                    <br/>
                    <form onSubmit={submit}>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='password'
                                placeholder='Новый пароль'
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
                        <button className='btn btn-primary' type='submit'>Сохранить пароль</button>
                    </form>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}