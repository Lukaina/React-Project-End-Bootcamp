import React from 'react';
import  { Dropdown  }  from  'react-bootstrap' ;
import '../../components/Carrito-Disfraces/styles.css';

function Dropdowns(props){
    return(
        <Dropdown className="box">
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="Drop">
          Talla
        </Dropdown.Toggle>
      
        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1" className="highlight" >0-2 meses</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="highlight" >2-4 meses</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >4-6 meses</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >6-8 meses</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >8-10 meses</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >10-12 meses</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    );
}
export default Dropdowns;

