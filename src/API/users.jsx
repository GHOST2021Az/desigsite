import React, { Component } from "react";
import { Getusers } from "./user";
import "@coreui/coreui/dist/css/coreui.min.css";

class Users extends Component {
  state = {
    users: Getusers(),
  };
  handleDelete = (user) => {
    const t = this.state.users.filter((u) => u.id != user.id);
    this.setState({
      users: t,
    }
    );
    
  };
 

  render() {
  
  
  
    
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <th scope="row"></th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.location}</td>
                <button
                  onClick={() => this.handleDelete(user)}
                  className="btn btn-primary m-2"
                >
                  delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="https://www.youtube.com/@TechSpurt">link</a>
      </div>
    );
  }
}
export default Users;
