import React from 'react';
import  { Dropdown  }  from  'react-bootstrap' ;
import '../../components/DND-Wrapper/styles.css';

function Dropdowns(props){
    return(
        <Dropdown className="box">
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="Drop">
          Talla
        </Dropdown.Toggle>
      
        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1" className="highlight" >Talla 2-4</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="highlight" >Talla 4-6</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >Talla 6-8</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >Talla 8-10</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >Talla 10-12</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="highlight" >Talla 12-14</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    );
}
export default Dropdowns;

