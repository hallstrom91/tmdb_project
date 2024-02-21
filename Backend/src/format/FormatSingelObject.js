function formatDataID(api) {
  return {
    id: api.id,
    title: api.title,
    overview: api.overview,
    releaseDate: api.release_date,
    popularity: api.popularity,
    voteAverage: api.vote_average,
    posterPath: api.poster_path
      ? `https://image.tmdb.org/t/p/w500${api.poster_path}`
      : null,
  };
}

module.exports = formatDataID;
