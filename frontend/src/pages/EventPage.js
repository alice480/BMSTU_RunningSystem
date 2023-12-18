import React from 'react'
// custom components
import Navbar from '../components/Navbar/Navbar'
import ShowEvents from '../Events/ShowEvents';

function EventsPage() {
    return (
        <div>
          <Navbar/>
          <div>
            <ShowEvents/>
          </div>
        </div>
      );
}

export default EventsPage;