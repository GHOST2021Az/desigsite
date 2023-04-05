import React from "react";

import { Component } from "react";
import { getUsers } from "./api";
import Basic from "./designCard";
class Cardlist extends Component {
  state = { teacher: getUsers() };
  render() {
    return (
      <div className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
        {this.state.teacher.map((user) => {
          return (
            <Basic
              key={user.Id}
              id={user.Id}
              name={user.Name}
              position={user.Position}
              rating={user.Rating}
              articles={user.Articles}
              followers={user.Followers}
            />
          );
        })}
      </div>
    );
  }
}

export default Cardlist;
