const API_KEY = "bf1cf1361af3f11f1840a55aa055a453";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovieList = (fetchUrl) => {
  return fetch(fetchUrl).then((res) => res.json());
};

export const fetchBannerMovie = () => {
  return fetchMovieList(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
  )
    .then((res) => res.results)
    .then((movies) => movies[Math.floor(Math.random() * movies.length - 1)]);
};
