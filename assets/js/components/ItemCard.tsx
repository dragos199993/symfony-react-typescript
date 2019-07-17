import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import axios from 'axios';

class ItemCard extends Component {

  componentDidMount() {
    axios.get('/data').then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <Container className="mt-5">
        Home page
        <Button>A button</Button>
      </Container>
    );
  }
}

export default ItemCard;
