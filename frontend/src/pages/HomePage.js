import React from 'react'
// custom components
import './Pages.css'
import Navbar from '../components/Navbar/Navbar'
import run_image from '../assets/run.jpg'

function Home() {
    return (
        <div>
          <Navbar/>
          <div>
              <div class="line_block">
                  <a>
                  С каждым годом заметно увеличивается количество увлеченных бегом людей.
                  Всё больше бегунов собираются вместе для совместных пробежек.
                  Утренняя пробежка на свежем воздухе бодрит и заряжает энергией.
                  <br/><br/>
                  Нашей целью является координация беговых мероприятий, чтобы помочь вам провести 
                  свою тренировку с максимальной пользой. 
                  <br/><br/>
                  У вас есть возможность создать свое мероприятие или зарегестрироваться на уже существующее мероприятие
                  </a>
              </div>

                <img src={run_image} class="line_block_img"/>
            </div>
        </div>
      );
}

export default Home;