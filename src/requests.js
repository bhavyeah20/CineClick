const API_KEY = "0d0f41899d83bb4005049a85998cf8ce";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
};

export default requests;
