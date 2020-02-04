import React, { Component } from 'react';
import { Button, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  handle(i){
    this.props.history.push(`${i}`) //truyền string
  }
  render() {
    return (      
      <Container id="login">
        <Form className="form">
          <h1>Login</h1>
          <p className="text-muted">Sign In to your account</p>
          <InputGroup className="mb-3 account-password">
            <InputGroupAddon addonType="prepend icon-img">
              <InputGroupText>
              <i class="cil-user"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="Username" autoComplete="username"  className="text-account"/>
          </InputGroup>
          <InputGroup className="mb-4 account-password">
            <InputGroupAddon addonType="prepend icon-img">
              <InputGroupText>
              <i class="cil-lock-locked"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="password" placeholder="Password" autoComplete="current-password" className="text-password" />
          </InputGroup>
          <Row className="row-end">           
            <Button color="primary" className="px-4" onClick={()=>this.handle("home")} >Login</Button>
            <Button color="link" className="px-0" >Forgot password?</Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Login;
