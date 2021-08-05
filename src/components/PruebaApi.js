import axios from "axios";
import { useState, useEffect } from "react";

export const Lbl = ({id = 'id', content = 'nota', fecha = 'fecha', important = 'importante'}) => {
	return (
		<li className="table-row">
			<div className="col col-1" data-label="Id">{id}</div>
			<div className="col col-2" data-label="Nota">{content}</div>
			<div className="col col-3" data-label="Fecha">{fecha}</div>
			<div className="col col-4" data-label="Importante">{important}</div>
		</li>
	)
}

const Loading = ()=>{
	return <div className="lds-ring">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
}

export const PruebaApi = () => {
	const [label, setLabel] = useState([])
	const [load, setLoad] = useState(true)

	const getNotes = () => {
		return axios.get(`https://thawing-reaches-53136.herokuapp.com/api/notes/`)
					.then(res => {
						return res.data
					});
	};

	useEffect(() => {
		setLoad(true)
		 getNotes().then(notes => {
		 	setLabel(notes)
			 setLoad(false)
		 });
	},[])

	if(load){
		return <>
			<Loading/>
		</>
	}

	return (
		<>
			<br/>Introduce una nota:<br/>
			<input type="text" id="txtApi"></input>
			<label><input type="checkbox" id="chkApi" name="chkApi" value="importante"/>Importante</label>
			<button onClick={() =>{
				let imp = 'false';
				if (document.querySelector('#chkApi').checked){
					imp= "true"
				}
				const newNote = {
					content: document.querySelector('#txtApi').value,
					important: imp
				};
				console.log(document.querySelector('#chkApi').checked)
				 axios.post('https://thawing-reaches-53136.herokuapp.com/api/notes/', newNote)
				 .then((res) => {
					 getNotes().then(notes => setLabel(notes));
					 document.querySelector('#txtApi').value = '';
					 document.querySelector('#chkApi').checked = false;
				 });

			}}>Click Me!</button>
			<div className="resp-table">
				<ul className="responsive-table">
					<li className="table-header">
						<div className="col col-1">Id</div>
						<div className="col col-2">Nota</div>
						<div className="col col-3">Fecha</div>
						<div className="col col-4">Importante</div>
					</li>
					{label.map(({id, content, date, fecha, important}) => <Lbl key={id} id={id} content={content} fecha={date || fecha} important={important}/>)}
				</ul>
			</div>
		</>
	);
};
