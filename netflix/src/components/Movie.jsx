import axios from "axios";
import { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const API_URL = "e5d4035af64cb4b2379c446bd7891263";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_URL}&language=en-US&page=1`
      )
      .then((el) => {
        setMovies(el?.data?.results);
        console.log(el?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {movies.map((ind) => {
        return (
          <div key={ind.id}>
            <img
              style={{ width: "430px" }}
              onClick={() =>
                (window.location = `https://www.2embed.to/embed/tmdb/tv?id=${ind?.id}&s=1&e=1`)
              }
              src={`https://image.tmdb.org/t/p/w500${ind?.poster_path}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
