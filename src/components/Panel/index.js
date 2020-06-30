import React from "react";
import { Container, Draggable } from "react-smooth-dnd";

import Card from "../Card-item";

import "./styles.css";

export default function Panel({ getChildPayload, items, onDrop }) {
  return (
    <div className="panel">
      <h4>Selecciona tu disfraz</h4>
      <p>Todos disponibles</p>
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
