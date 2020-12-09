import React, { Fragment } from "react";
import Row from "./Row";

const API_KEY = "bf1cf1361af3f11f1840a55aa055a453";
const BASE_URL = "https://api.themoviedb.org/3";

const rows = [
  {
    title: "Trending Now",
    Url: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    isLarge: false,
  },
  {
    title: "Netflix Original",
    Url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_network=213`,
    isLarge: true,
  },
  {
    title: "Top Rated Movie",
    Url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    isLarge: false,
  },
  {
    title: "Action Movies",
    Url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    isLarge: false,
  },
  {
    title: "Comedy Movies",
    Url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    isLarge: false,
  },
  {
    title: "Horror Movies",
    Url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    isLarge: false,
  },
  {
    title: "Romance Movies",
    Url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    isLarge: false,
  },
  {
    title: "Documantaries",
    Url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    isLarge: false,
  },
];

const Board = () => {
  return (
    <>
      {rows.map((row, index) => (
        <Row
          key={index}
          title={row.title}
          fetchUrl={row.Url}
          isLarge={row.isLarge}
        />
      ))}
    </>
  );
};

export default Board;
