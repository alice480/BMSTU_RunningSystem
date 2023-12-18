import React, { useState, useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './ShowClubs.css'

const BASE_URL = 'http://127.0.0.1:8000/api/clubs'

const ShowClubs = () => {
	const[clubs, setclubs] = useState([]);

	useEffect(()=>{
		const Fetchart = async()=>{
			const response = await fetch(`${BASE_URL}/clubs_list`);
			const clubs_json = await response.json();
			setclubs(clubs_json);
		}
		Fetchart();
	},[])
    console.log(clubs);
	return (
		<div className="container">
			<div className="club_title">Клубы</div>
				<div className="card">
					<div className="card-title">
						Engirunners
					</div>
					<div className="cart-body">
						Беговое сообщество студентов и выпускников Бауманки
					</div>
					<br/>
					<button className='card-button' type='submit'>Выйти</button>
				</div>
				{clubs ? clubs.map(club => (
                    <div className="card">
						<div className="card-title">
							{club.fields.name}
						</div>
                        <div className="cart-body">{club.fields.description}</div>
						<br/>
						<button className='disabled-card-button' type='submit'>Вступить</button>
                    </div>
		        )) : null}
		</div>
	)
}

export default ShowClubs