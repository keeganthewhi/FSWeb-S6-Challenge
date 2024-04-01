import React, { useEffect, useState } from 'react';
import Karakter from './components/Karakter';
import axios from 'axios';
import styled from 'styled-components';

const PageContainer =styled.div`
width: 600px;
margin: auto;
background-color: rgba(245, 245, 245, 0.75);
padding: 1rem
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [characters, setCharacters] = useState([]);
const [films, setFilms] = useState([]);

  useEffect(() => {
  axios
  .get("https://swapi.dev/api/people/")
  .then((res) => setCharacters(res.data))

  axios
  .get("https://swapi.dev/api/films/")
  .then((res) => setFilms(res.data["0"].results))

  }, [])

  return (
    <PageContainer>
      <h1 className="Header">Karakterler</h1>
      {characters.map(character =>(
        <Karakter character={character} films={films}
        />
        ))}
       
    </PageContainer>
  );
}

export default App;
