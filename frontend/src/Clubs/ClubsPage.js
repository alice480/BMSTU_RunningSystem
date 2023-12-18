import React from 'react'
// custom components
import Navbar from '../components/Navbar/Navbar'
import ShowClubs from './ShowClubs';

function ClubsPage() {
    return (
        <div>
          <Navbar/>
          <div>
            <ShowClubs/>
          </div>
        </div>
      );
}

export default ClubsPage;