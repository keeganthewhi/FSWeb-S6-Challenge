// Karakter bileşeniniz buraya gelecek
import { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import Film from "./Film";

const Header = styled.h2`
background-color: #dddddd;
color: #222222;
padding :1rem;
border-radius: 0.5rem;
margin-bottom:0;

display: flex;
justify-content: space-between;
cursor: pointer;
transition: 0.3s;
&:hover {
    background-color: #cccccc
}s
`;

const AccordionBody = styled.div`
  background: #ffffff;
  color: #222222;
  padding: 1rem;
  overflow: hidden;
`;

const Key = styled.span`
  display: inline-block;
  width: 25%;
  font-weight: bold;
`;

const Value = styled.span`
  display: inline-block;
  width: 75%;
  font-weight: normal;
`;

const KarakterData = styled.li`
  list-style-type: none;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #ddd;
  &:hover {
    background: #eeeeee;
  }
`;

const Karakter = ({ character, films }) => {
  const [show, setShow] = useState(false);
  const getFilm = (filmName) => films?.find(film => film.name === filmName)
  return (
    <Accordion title={character.name}>
      <ul style={{ paddingLeft: "0.5rem" }}>
        <KarakterData>
          <Key>Gender</Key>
          <Value>{character.gender}</Value>
        </KarakterData>
        <KarakterData>
          <Key>Height</Key>
          <Value>{character.height}</Value>
        </KarakterData>
        <KarakterData>
          <Key>Mass</Key>
          <Value>{character.mass}</Value>
        </KarakterData>
        <KarakterData>
          <Key>Birth Year</Key>
          <Value>{character.birth_year}</Value>
        </KarakterData>
        <KarakterData>
          <Key>Eye Color</Key>
          <Value>{character.eye_color}</Value>
        </KarakterData>
        <KarakterData>
          <Key>Hair Color</Key>
          <Value>{character.hair_color}</Value>
        </KarakterData>
        <KarakterData>
          <Key>Skin Color</Key>
          <Value>{character.skin_color}</Value>
        </KarakterData>
      </ul>
      <h5> Appears in {character.films.length} films</h5>
      {character.films.map((filmName) => (
        <Film filmName={filmName} films={films}></Film>
      ))}
    </Accordion>
  );
};

export default Karakter;
