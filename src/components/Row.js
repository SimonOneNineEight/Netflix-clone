import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchMovieList } from "../webAPI";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const options = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const RowWrapper = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  ${(props) =>
    props.isLarge &&
    `
    margin-top: 60px;
    margin-bottom: 60px;
  `}
`;
const RowTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 3px;
`;
const RowMovies = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const RowMovie = styled.div``;
const MovieCover = styled.img`
  object-fit: contain;
  max-height: 150px;
  transition: transform 0.2s;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  ${(props) =>
    props.isLarge &&
    `
    max-height: 400px;
    object-fit: contain;
    transition: transform 0.2s;
    margin-right: 5px;
  `}
`;

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movieList, setMovieList] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleClick = (movie) => {
    movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const trailerParams = urlParams.get("v");
        if (trailerUrl === trailerParams) return setTrailerUrl("");
        return setTrailerUrl(trailerParams);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    //Get the movie List
    const fetchMovieData = async () => {
      const response = await fetchMovieList(fetchUrl).then((data) =>
        setMovieList(data.results)
      );
      return response;
    };
    fetchMovieData();
  }, [fetchUrl]);
  return (
    <RowWrapper isLarge={isLarge}>
      <RowTitle>{title}</RowTitle>
      <RowMovies>
        {movieList.map((movie) => (
          <RowMovie>
            <MovieCover
              key={movie.id}
              src={`${IMAGE_URL}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              isLarge={isLarge}
              onClick={() => handleClick(movie)}
            ></MovieCover>
          </RowMovie>
        ))}
      </RowMovies>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
    </RowWrapper>
  );
};

export default Row;
