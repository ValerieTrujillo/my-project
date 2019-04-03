import React from "react";
import RegisterForm from "./RegisterForm";
import UserService from "../../services/UserService";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleInitial: "",
      lastName: "",
      email: "",
      password: "",
      modifiedBy: ""
    };
  }
  onSubmit = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({
      [name]: value
    });
  };
  handleClick = () => {
    console.log("handleClick.Submit", this.state);
    UserService.Register(this.state);
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <RegisterForm 
        onSubmit={this.onSubmit} 
        handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Register;
