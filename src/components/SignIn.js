import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from "reactstrap";

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      validate: {
        emailState: "",
        passwordState: "",
      },
    }
  }
  
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  render() {
    return (
      <Container className="mv5 ba br3 bw1 shadow pa3 w-40-l w-60-m w-70">
        <h2 className="mb4">Sign in</h2>
        <Form className="">
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="username"
                id="signInUsername"
                placeholder="Username"
                minlength="4"
                maxlength="20"
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                required
                onChange={(e) => this.validateEmail(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="signInPassword"
                placeholder="Password"
                minlength="6"
                maxlength="25"
                required
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Button className="w-100 bg-green">LOGIN</Button>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
