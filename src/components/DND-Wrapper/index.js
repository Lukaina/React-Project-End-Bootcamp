import React, { PureComponent } from "react";

import Panel from "../Panel";

import "./styles.css";

export default class DndWrapper extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            leftItems: [...props.items],
            rightItems: []
          };
    }

  onDropCard = (stateName, items) => info => {
    const { addedIndex, removedIndex, payload } = info;
    console.log({info,stateName})
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

    this.setState({ [stateName]: result });
  };

  render() {
    const { leftItems, rightItems } = this.state;

    return (
      <div className="dnd-wrapper">
        <Panel
          getChildPayload={index => leftItems[index]}
          items={leftItems}
          onDrop={this.onDropCard("leftItems", leftItems)}
        />
        <Panel
          getChildPayload={index => rightItems[index]}
          items={rightItems}
          onDrop={this.onDropCard("rightItems", rightItems)}
        />
      </div>
    );
  }
}
