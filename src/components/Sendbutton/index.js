import React  from 'react';
import {Button, Modal} from 'react-bootstrap'
import './index.css';

class Enviar extends React.Component {
    constructor()
    {
        super()
        this.state={
        show: false
        }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
    }
    render () {
        return (
            <div>
            <Button className="button-modal" onClick= {()=>{this.handleModal()}}>Enviar</Button>
            <Modal show = {this.state.show} onHide={()=>this.handleModal()}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="textstyle">
            🎉 Su reserva se guardó con éxito 🎉
            </Modal.Body>
            <Modal.Footer>
                <a href="/" className="button-modal">¡Genial!</a>
            {/* <Button className="button-modal" onClick= {()=>{this.handleModal()}}>
            ¡Genial!
            </Button> */}
            </Modal.Footer>
            </Modal>
            </div>
        );
     }
  }

export default Enviar;