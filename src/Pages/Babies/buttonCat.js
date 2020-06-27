import React from 'react';
import  { Dropdown  }  from  'react-bootstrap' ;
import '../../components/DND-Wrapper/styles.css';

function Dropdowns(props){
    return(
        <Dropdown className="box">
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="Drop">
          Categoria
        </Dropdown.Toggle>
      
        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1" className="highlight" >Pirata</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="highlight" >Años 60</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >Peluche</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    );
}
export default Dropdowns;
