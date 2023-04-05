import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// or less ideally

class Tag extends Component {
  state = { count: 0, tag: ["1"] };

  format() {
    const test = this.stae.count;

    return test == 0 ? "zero" : test;
  }
  handelIncerment = () => {
    console.log("clicked");
    var t = this.state.count;
    console.log(t);
    this.setState({ count: t + 1, tag: [] });
  };
  handle = () => {
    console.log("clicked");
    var t = this.state.count;
    console.log(t);
    this.setState({ count: t - 1, tag: [] });
  };
  
  render = () => {
    let test = "btn btn-";
    test += this.state.count == 0 ? "warning" : "info";

    return (
      <div>
        <h1>what's up </h1>
        <button className={test}> read</button>
        <span style={this.style}>{this.state.count}</span>
        <ul>
          {this.state.tag.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <Button onClick={this.handelIncerment}>increase</Button>
        <Button onClick={this.handle}>decrease</Button>
        
      </div>
    );
  };
}

export default Tag;
