import React, { FunctionComponent } from 'react';
import { Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { useInput } from "../hooks/useInput";
import axios from '../../config/axios';

const HomePage: FunctionComponent = () => {
  const { value: title, bind, reset } = useInput('');

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    axios.post('/post/create', { title }).then((res) => {
      console.log(res.data);
    });
    reset();
  };

  return (
    <Container>
      <Col>
        <Form onSubmit={ handleSubmit }>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input className="title" type="text" { ...bind } />
          </FormGroup>
        </Form>
      </Col>
    </Container>
  );
};

export default HomePage;
