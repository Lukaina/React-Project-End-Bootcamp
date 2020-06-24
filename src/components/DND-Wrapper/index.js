import React, { PureComponent } from "react";

import Panel from "../Panel";

import "./styles.css";
import "../../categories.model.js";
import { CATEGORIES, babiesInfo, womanInfo } from "../../categories.model";

export default class DndWrapper extends PureComponent {
    constructor(props) {
        super(props)
        console.log('category', props.category);
        this.loadData(props.category);
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

  loadData = (category) => {
    if(!!category) {
      switch(category) {
        case CATEGORIES.BABIES: {
          this.state = {
            leftItems: [...babiesInfo],
            rightItems: []
          };
          break;
        }
        case CATEGORIES.WOMEN: {
          this.state = {
            leftItems: [...womanInfo],
            rightItems: []
          };
          break;
        }
        default: {
          this.state = {
            leftItems: [...babiesInfo],
            rightItems: []
          };
          break;
        }
      }
    }
  }


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
