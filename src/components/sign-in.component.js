import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from "react-redux";
import { signInVerification } from "../redux/actions/userAction";

export class SignIn extends Component {
  constructor(props) {  
    super(props)

    // Setting up functions;
   
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = { 
      userid: '',
      password: ''
    }
  }

  onChangeUserUsername(e) { 
    this.setState({ userid: e.target.value }) 
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value }) 
  }

  onSubmit(e) { 
    e.preventDefault()
    const userObject = { 
      userid: this.state.userid, 
      password: this.state.password 
    };
    this.props.signInVerify(userObject);
  }

  render() {
    if (this.props.isSignedIn) {
      // Redirect to User List 
      this.props.history.push('/user-list') 
    }
    return (
    <div className="form-wrapper"> 
      <Form onSubmit={this.onSubmit}> 
        <Form.Group controlId="Name">
          <Form.Label>User Id</Form.Label>
          <Form.Control type="text" value={this.state.userid} onChange={this.onChangeUserUsername} /> 
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />{/*the user enter the password in the form.control field in the screen, onchange event is used in this line and then the 30th line should be triggerd, value shoule be stored in 31th line and 38th line*/}
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Sign-in
        </Button>
      </Form>
    </div>);
  }
}
//This is redux part. 
const mapStateToProps = (state) => {
  return {isSignedIn : state.userReducer.isSignedIn};  
}

const mapDispatchToProps = (dispatch) => ({
  signInVerify: (userObject) => dispatch(signInVerification(userObject)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
