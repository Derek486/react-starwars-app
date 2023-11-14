// src/CharacterList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

class CharacterList extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        this.setState({ characters: response.data.results });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <h2>Personajes de Star Wars</h2>
        <Row>
          {this.state.characters.map((character, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    <strong>Género:</strong> {character.gender}<br />
                    <strong>Año de nacimiento:</strong> {character.birth_year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CharacterList;
