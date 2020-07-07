import React from 'react';
import './Form.css';
import Dateandhour from '../Dateandhour';
import Sendbutton from'../Sendbutton';

class Form extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          name: '',
          mail: '',
          document: '',
          documentNumber: '',
          hour: ''
        }
      }

    render () {
        const { name, mail, document, documentNumber, hour } = this.state
        console.log({name, mail, document, documentNumber, hour})
  
        return (
            <div>
                <form className="form">
                <h1>Formulario</h1>
                    <label htmlFor="name">Nombre completo:</label>
                    <br/>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre" 
                        value={name}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                    />
                    <br/>
                    <label htmlFor="mail">Correo Electrónico:</label>
                    <br/>
                    <input
                        id="mail"
                        type="text"
                        placeholder="ejemplo@mail.com" 
                        value={mail}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                    />
                    <br/>
                    <label htmlFor="document">Tipo de documento:</label>
                    <select
                        id="document"
                        type="text"
                        value={document}
                        onChange={(e) => this.setState({ date: e.target.value })} 
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
                        value={documentNumber}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                    />
                    <br/>
                    <label htmlFor="date">Fecha de medición:</label>
                    <Dateandhour/>
                    <br/>
                    <label htmlFor="document">Hora de medición:</label>
                    <br/>
                    <select
                        id="document"
                        type="text"
                        value={document}
                        onChange={(e) => this.setState({ date: e.target.value })} 
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
                    <Sendbutton/>
                </form>
            </div>
        )
    }
}

export default Form;