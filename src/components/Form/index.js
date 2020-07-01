import React from 'react';
import './Form.css';

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
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre" 
                        value={name}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                    />
                    <label htmlFor="mail">Correo Electrónico:</label>
                    <input
                        id="mail"
                        type="text"
                        placeholder="ejemplo@mail.com" 
                        value={mail}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                    />
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
                    <label htmlFor="hour">Seleccione la hora:</label>
                    <select
                        id="hour"
                        type="hour"
                        value={hour}
                        onChange={(e) => this.setState({ date: e.target.value })} 
                    >
                        <option>8 - 10am</option>
                        <option>10 - 12md</option>
                        <option>12 - 2pm</option>
                        <option>2 - 4pm</option>
                        <option>4 - 6pm</option>
                        <option>6 - 8pm</option>
                        <option>8 - 10pm</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Form;