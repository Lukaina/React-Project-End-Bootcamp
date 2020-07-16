import React from 'react';
import './Form.css';
import '../Sendbutton/index.css';
import Dateandhour from '../Dateandhour';
import {Button, Modal} from 'react-bootstrap';

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		  name: '',
		  mail: '',
		  document: '',
		  documentNumber: '',
		  hour: '',
		  show: false
		}
	}

	handleModal() {
		this.setState({show:!this.state.show})
	}
	handleSubmit() {

		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const typedocument = document.getElementById('typedocument').value;
		const documentNumber = document.getElementById('documentNumber').value;
		const hour = document.getElementById('hour').value;

		const message = `
			Hola Alquisfraces,
			¡Queremos confirmarte que tienes una nueva reserva! 😁

			Datos del cliente
			🙋 Nombre: ${name}
			📅 Día: 17/07/2020
			⏰ Hora: ${hour} 
			Tipo de documento: ${typedocument}
			Número de documento: ${documentNumber}
		`

		const bodyEmail = { name, email, message }

		fetch('http://localhost:3000/contact',{
			method: "POST",
			body: JSON.stringify(bodyEmail),
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
		}).then(() => this.handleModal())
	}
	
	  
	render () {
		// const { name, mail, document, documentNumber, hour } = this.state
		// console.log({name, mail, document, documentNumber, hour})
  
		return (
			<div>
				<form className="form" method="POST" action="/contact">
				<h1>Formulario</h1>
					<label htmlFor="name">Nombre completo:</label>
					<br/>
					<input
						name="name"
						id="name"
						type="text"
						placeholder="Nombre" 
						// value={name}
						// onChange={(e) => this.setState({ name: e.target.value })} 
					/>
					<br/>
					<label htmlFor="mail">Correo Electrónico:</label>
					<br/>
					<input
						name="email"
						id="email"
						type="text"
						placeholder="ejemplo@mail.com" 
						// value={mail}
						// onChange={(e) => this.setState({ name: e.target.value })} 
					/>
					<br/>
					<label htmlFor="typedocument">Tipo de documento:</label>
					<select
						id="typedocument"
						type="text"
						// value={document}
						// onChange={(e) => this.setState({ date: e.target.value })} 
					>
						<option>RC - Registro Civil</option>
						<option>TI - Tarjeta de Identidad</option>
						<option>CC - Cédula de Ciudadanía</option>
						<option>CE - Cédula de Extranjería</option>
						<option>PA - Pasaporte</option>
						<option>MS - Menor sin identificación</option>
						<option>AS - Adulto sin identificación</option>
					</select>
					<label htmlFor="documentNumber">Número de documento:</label>
					<input
						id="documentNumber"
						type="text"
						placeholder="Número documento" 
						name="message"
						// value={documentNumber}
						// onChange={(e) => this.setState({ name: e.target.value })} 
					/>
					<br/>
					<label htmlFor="date">Fecha de medición:</label>
					<Dateandhour/>
					<br/>
					<label htmlFor="hour">Hora de medición:</label>
					<br/>
					<select
						id="hour"
						type="text"
						// value={document}
						// onChange={(e) => this.setState({ date: e.target.value })} 
					>
						<option>10:00 am </option>
						<option>10:30 am</option>
						<option>11:00 am</option>
						<option>11:30 am</option>
						<option>12:00 m</option>
						<option>12:30 pm</option>
						<option>2:00 pm</option>
						<option>2:30 pm</option>
						<option>3:00 pm</option>
						<option>3:30 pm</option>
						<option>4:00 pm</option>
						<option>4:30 pm</option>
						<option>5:00 pm</option>
						<option>5:30 pm</option>
						<option>6:00 pm</option>
					</select>
					<br/>
					<br/>
					<Button className="button-modal" onClick= {()=>{this.handleSubmit()}}>Enviar</Button>
					<Modal show = {this.state.show} onHide={()=>this.handleModal()}>
						<Modal.Header closeButton></Modal.Header>
						<Modal.Body className="textstyle">
							🎉 Su reserva se guardó con éxito 🎉
						</Modal.Body>
						<Modal.Footer>	
							<a className="button-modal" href='/'>
								¡Genial!
							</a>
						</Modal.Footer>
					</Modal>       
				</form>
			</div>
		)
	}
}

export default Form;