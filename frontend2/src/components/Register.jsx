import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Navigation from "./header/Navigation";
import axios from "axios";

export default function Register(props) {
  const [formValues, setFormValues] = useState({});

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const payload = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone,
      airport: formValues.airport,
      role: formValues.role
    };

    const onboardUrl =
      payload.role=== 1 ? "/admin/users" : "/traveler";

    axios
      .post("https://kids-fly-be.herokuapp.com/api/auth/register", payload)
      .then(res => {
        console.log(res);
        props.history.push(onboardUrl);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <>
      <Navigation login={true} />
      <Container className="mt-5">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name"> Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="airport">Airport</Label>
            <Input
              type="text"
              name="airport"
              id="airport"
              placeholder="Airport"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="admin_code">Role</Label>
            <select
             
              name="role"
              id="role"
              onChange={handleChange}
              >
              <option value ="traveler" >Traveler</option>
              <option value ="admin" >Admin</option>
              </select>
      
          </FormGroup>

          <Button onClick={onSubmit} color="success">Register</Button>
        </Form>
      </Container>
    </>
  );
}
