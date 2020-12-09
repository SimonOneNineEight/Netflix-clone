import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchBannerMovie } from "../webAPI";

const BannerWrapper = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center center;
  min-height: 500px;
  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
const BannerDetail = styled.div`
  position: relative;
  padding: 150px 75px 0;
  z-index: 2;
`;
const BannerTitle = styled.div`
  font-size: 72px;
  font-weight: bold;
  margin: 15px 0;
`;
const BannerButton = styled.div`
  margin: 15px 0;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.2s;
`;
const PlayButton = styled(Button)`
  background: #f8f8ff;
  &:hover {
    background-color: rgba(250, 250, 255, 0.6);
  }
`;
const MoreInfoButton = styled(Button)`
  background-color: rgba(158, 158, 158, 0.8);
  color: #f8f8ff;
  margin-left: 10px;
  &:hover {
    background-color: rgba(158, 158, 158, 0.6);
  }
`;
const BannerDiscription = styled.div`
  max-width: 600px;
  font-size: 24px;
  padding: 15px 0;
`;
const BannerFade = styled.div`
  height: 100px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #000000
  );
`;

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      await fetchBannerMovie().then((res) => {
        setMovie(res);
      });
    };
    fetchMovie();
  }, []);
  console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
  return (
    <BannerWrapper
      backgroundImg={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    >
      <BannerDetail>
        <BannerTitle>
          {movie?.name || movie?.title || movie?.original_title}
        </BannerTitle>
        <BannerDiscription>{movie.overview}</BannerDiscription>
        <BannerButton>
          <PlayButton>Play</PlayButton>
          <MoreInfoButton>Information</MoreInfoButton>
        </BannerButton>
      </BannerDetail>
      <BannerFade />
    </BannerWrapper>
  );
};

export default Banner;
