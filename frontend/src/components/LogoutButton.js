import React, { Component } from 'react'
import axios from "../axios"
// import onLog
export default class LogoutButton extends Component {
  onLogout = () => {
    axios.delete(`/logout`, {
      // username: "admin",
      // password: "123456"
    })
      .then(response => {
        this.props.setLogout()
        alert("Logout sucsess !")
      })
      .catch(function (error) {
        console.log(error);
        alert("Logout fail !")
      });
  }
  render() {
    return (
      <div className=" profile_panel text-center">
        {/* {display} */}
        <button
          onClick={this.onLogout}
          className="logoutbtn btn btn-link btn-block"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Sign out
         </button>
      </div>
    )
  }
}
