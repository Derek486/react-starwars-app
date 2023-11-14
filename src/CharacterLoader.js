// src/CharacterLoader.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, FormControl } from 'react-bootstrap';

function CharacterLoader() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)

  const loadCharacters = (e, search) => {
    if (search) {
        setSearchLoading(true)
    } else {
        setLoading(true);    
    }
    axios
      .get('https://swapi.dev/api/people/' + (search ? '?search='+search : ''))
      .then((response) => {
          setCharacters(response.data.results);        
          if (search) {
            setSearchLoading(false)
          } else {
            setLoading(false);
          }
      })
      .catch((error) => {
        console.error(error);
        if (search) {
            setSearchLoading(false)
        } else {
            setLoading(false);
        }
      });
  };

  const searchCharacter = (e) => {
    loadCharacters(e, search)
  }

  return (
    <Container>
      <h1>Personajes de Star Wars</h1>

      <FormControl type='search' className='my-2' placeholder='Buscar personaje' value={search} onInput={(e) => {
        setSearch(e.target.value)
      }} />
      <Button className='btn-dark' onClick={searchCharacter}>
        {searchLoading ? 'Buscando...' : 'Buscar'}
      </Button>

      <Button onClick={loadCharacters} disabled={loading}>
        {loading ? 'Cargando Personajes...' : 'Cargar Personajes'}
      </Button>
      <Row>
        {characters.map((character, index) => (
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

export default CharacterLoader;
