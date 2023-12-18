import React, { useState, useEffect } from "react";
import './ShowEvents.css'

const BASE_URL = 'http://127.0.0.1:8000/api/events'

const ShowEvents = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const Fetchart = async () => {
			const response = await fetch(`${BASE_URL}/events_list`);
			const events_json = await response.json();
			setEvents(events_json);
		}
		Fetchart();
	}, [])
	console.log(events);
	return (
		<div className="container">
			<div className="event_title">Мероприятия</div>

			{events ? events.map(event => (
				<div className="card">
					{/* <a href={`/events/?id=${event.pk}`}>{event.fields.name}</a>					 */}
					<div className="card-title">{event.fields.name}</div>
					<div className="cart-body">
						{event.fields.description}
						<br /><br />
						<a href="/events/?id=${event.pk}">Регистрация</a>
					</div>
				</div>
			)) : null}
			<br />
		</div>
	)
}

export default ShowEvents