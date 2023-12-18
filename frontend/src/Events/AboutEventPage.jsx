import React, { useState } from "react";
import running from '../assets/running2.jpg'
import Navbar from '../components/Navbar/Navbar'
import './ShowEvents.css'

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

const AboutEventPage = () => {
  return (

    <section>

      <Navbar />
      <MDBContainer className="py-5">


        <MDBRow>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardImage
                src={running}
                alt="avatar"
                style={{ height: '400px' }}
                fluid />
              <br />
              <div className="event-title">Красочный забег</div>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Описание мероприятия</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <div className="lead">
                  Друзья, краски, смех и, конечно, бег. Эти эмоции такие долгожданные и живые. Ты выходишь на старт и знаешь — каждый новый километр будет ещё ярче. Твой бег может быть разным, но сегодня он только про радость.
                  <br /><br />
                  Маршрут забега проходит по территории Олимпийского комплекса «Лужники», мимо Аллеи Славы и Лужнецкой набережной. Участники пробегут 5 км через четыре красочные зоны, где их будут осыпать яркими красками.
                </div>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Дата проведения</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">25 июля 2024</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Рагистрация до</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">1 мая 2024</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />

                {/* <select className='form-control' >
                            <option value="" disabled selected>Выберите роль</option>
                            <option value="role1">Участник</option>
                            <option value="role2">Волонтёр</option>
                </select> */}
                <br />
                {/* <button className='btn btn-primary' type='submit'>Зарегестрироваться</button> */}
                <button className='cansel-button' type='submit'>Отменить запись</button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

  )
}

export default AboutEventPage
