const { mock, host, api_key } = window.AppConfig;

export async function GetDiscovery() {
  const endpoint = `${host}/discover/movie?api_key=${api_key}&sort_by=popularity.desc`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}

export async function GetMovies() {
  const endpoint = `${host}/discover/movie?api_key=${api_key}&sort_by=vote_average.desc`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}

export async function GetMovie(movieid) {
  const endpoint = `${host}/movie/${movieid}?api_key=${api_key}&sort_by=vote_average.desc`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}

export async function GetGeners() {
  const endpoint = `${host}/genre/movie/list${movieid}?api_key=${api_key}&sort_by=vote_average.desc`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}

export async function MoviesByGeners(page, genreid) {
  const endpoint = `${host}/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=${page}&with_genres=${genreid}`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}

export async function GetReviewsByMovie(movieid, page) {
  const endpoint = `${host}/movie/${movieid}/reviews?api_key=${api_key}&page=${page}`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}

export async function GetCreditsByMovie(movieid) {
  const endpoint = `${host}/movie/${movieid}/credits?api_key=${api_key}`;
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
}
