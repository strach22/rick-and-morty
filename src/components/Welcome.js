import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Hola {this.props.message} desde Welcome</p>
      </div>
    );
  }
}
