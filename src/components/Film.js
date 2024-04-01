import { useEffect, useState } from "react";
import Accordion from "./Accordion";

const Film = ({ filmName, films }) => {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const f = films?.find((f) => f.title === filmName);

    setFilm(f);
  }, [filmName, films]);

  return (
    <Accordion title={film?.title}>
      <p>{film?.opening_crawl}</p>
      <p>Directed by:{film.director} </p>
      <p>Produced by:{film.producer}</p>
      <p>Release date: {film.release_date}</p>
    </Accordion>
  );
};

export default Film;
