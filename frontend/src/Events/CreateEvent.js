import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CreateEvent = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	//   const [date, setDate] = useState("2023-12-16 9:00");
	const [date, setDate] = useState("");
	const [reg_status, setRegStatus] = useState('OP');
	const [organizer, setOrganizer] = useState(15);
	const [place, setPlace] = useState(1);
	const handleSubmit = (e) => {
		e.preventDefault();
		const events = { name: name, description: description, reg_status: reg_status, date: date, organizer: organizer, place: place }
		fetch('http://127.0.0.1:8000/api/events/create_event', {
			method: 'POST',
			headers: { 'Content-Type': "application/json" },
			body: JSON.stringify(events)
		})
	}
	return (

		<div className='container mt-5'>
			<h1 className='create_title'>Создать новое мероприятие</h1>
			<form onSubmit={handleSubmit} className='create_form'>
				<div className='form-group'>
					<input type="text" name="name" placeholder="Название мероприятия" className='form-control' required value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<br />
				<div className='form-group'>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} />
				</div>
				<br />
				<div className='form-group'>
					<input name="date" placeholder="Дата проведения" className='form-control' required value={date} onChange={(e) => setDate(e.target.value)} />
				</div>
				<br />
				<button className='button-92'>Добавить мероприятие</button>
			</form>
			<p className='mt-3'>
				<Link to='/events'>К мероприятиям</Link>

			</p>
		</div>
	)
}

export default CreateEvent