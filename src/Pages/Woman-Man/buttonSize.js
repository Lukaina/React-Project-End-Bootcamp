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
          <Dropdown.Item href="#/action-1" className="highlight" >Talla S</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="highlight" >Talla M</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >Talla L</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    );
}
export default Dropdowns;

