import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const CreateClub = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
//   const [date, setDate] = useState("2023-12-16 9:00");
  const [date, setDate] = useState("");
  const [reg_status, setRegStatus] = useState('OP');
  const [organizer, setOrganizer] = useState(15);
  const [place, setPlace] = useState(1);
  const handleSubmit = (e) =>{
	e.preventDefault();
	const events = {name:name,description:description, reg_status:reg_status, date:date, organizer:organizer, place:place}
	fetch('http://127.0.0.1:8000/api/events/create_event',{
		method:'POST',
		headers:{'Content-Type':"application/json"},
		body: JSON.stringify(events)
	})
  }
  return (
	
	<div className='container mt-5'>
		<h1 className='create_title'>Создать новый клуб</h1>
		<form onSubmit={handleSubmit} className='create_form'>
			<div className='form-group'>
				<input type="text" name="name" placeholder="Название клуба" className='form-control' required value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<br/>
			<div className='form-group'>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Описание"  value={description} onChange={(e) =>setDescription(e.target.value)} />
			</div>
			<br/>
			<div className='form-group'>
			<select className='form-control' >
                            <option value="" disabled selected>Выберите локацию</option>
                            <option value="park1">Измайловский парк</option>
                            <option value="park2">Парк Горького</option>
                            <option value="park2">Парк Кузьминки</option>
            </select>
			</div>
			<br/>
			<button className='button-92'>Добавить клуб</button>
		</form>
		<p className='mt-3'>
			<Link to='/clubs'>К клубам</Link>

        </p>
	</div>
  )
}

export default CreateClub