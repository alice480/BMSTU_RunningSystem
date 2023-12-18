import React from "react";
import Navbar from "../components/Navbar/Navbar";
import './Pages.css' 

function About() {
  return (
    <div className="about">
          <Navbar/>
          <div class="div_about">
            <h1>О Веб-приложении организации беговых мероприятий</h1>
              Система независимых парковых забегов. 
              Сделана бегунами для бегунов. 
              <br/>
              Вы также можете присоединиться к нашим забегам, к разработке или редактированию контента.
          </div>
    </div>
  );
}

export default About;