import React from "react";
import { Container, Draggable } from "react-smooth-dnd";

import Card from "../Card-item";

import "./styles.css";

export default function Panel({ getChildPayload, items, onDrop }) {
  return (
    <div className="r-panel">
      <h4>Disfraces seleccionados</h4>
      <p>Máximo 3</p>
      <Container
        getChildPayload={getChildPayload}
        groupName="panel"
        onDrop={onDrop}
      >
        {items.map(( item , index) => (
          <Draggable key={`right-item-draggable-${index}`}>
            <Card item={ item } />
          </Draggable>
        ))}
      </Container>
    </div>
  );
}
