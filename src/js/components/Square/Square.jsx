import React from "react";
import "./Square.scss";
import { Ripple } from "@rmwc/ripple";
import { Icon } from "@rmwc/icon";

export default class Square extends React.Component {
  render() {
    return (
      <Ripple
        onClick={this.props.onClick}
        className={`square ${this.props.completed ? "square--completed" : ""}`}
        primary
      >
        <div>
          {this.props.checked ? (
            this.props.currentPlayer === "X" ? (
              <Icon icon={{ icon: "close", size: "large" }} />
            ) : (
              <Icon icon={{ icon: "panorama_fish_eye", size: "large" }} />
            )
          ) : null}
        </div>
      </Ripple>
    );
  }
}
