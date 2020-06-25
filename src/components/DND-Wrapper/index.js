import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
 
import Panel from "../Panel"; 
 
import "./styles.css"; 
 
export default function DndWrapper({ items }) { 
  const [leftItems, setLeftItems] = useState([...items]); 
  const [rightItems, setRightItems] = useState([]);
  const history = useHistory();
 
  const onDropCard = (stateName, items) => (info) => { 
    const { addedIndex, removedIndex, payload } = info; 
 
    if (addedIndex === null && removedIndex === null) { 
      return; 
    } 
 
    const result = [...items]; 
 
    if (removedIndex !== null) { 
        // eslint-disable-next-line no-unused-expressions 
      result.splice(removedIndex, 1)[0]; 
    } 
 
    if (addedIndex !== null) { 
      result.splice(addedIndex, 0, payload); 
    } 
 
    if (stateName === 'leftItems') { 
      setLeftItems(result); 
    } else { 
      setRightItems(result); 
    } 
  } 
 
  return ( 
      <div className="dnd-wrapper"> 
        <div className="dnd-wrapper__content"> 
          <Panel 
            getChildPayload={index => leftItems[index]} 
            items={leftItems} 
            onDrop={onDropCard("leftItems", leftItems)} 
          /> 
          <Panel 
            getChildPayload={index => rightItems[index]} 
            items={rightItems} 
            onDrop={onDropCard("rightItems", rightItems)} 
          /> 
        </div> 
        <div className="dnd-wrapper__btn"> 
          <button onClick={() => history.push('/registro') }>Continuar</button> 
        </div> 
      </div> 
    ); 
}
