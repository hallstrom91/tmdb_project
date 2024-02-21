function searchFormatter(data, type) {
  if (type === "person") {
    return formatPerson(data);
  } else if (type === "company") {
    return formatComapny(data);
  } else if (type === "movie" || type === "tv") {
    return formatMovieorTv(data);
  } else {
    return formatDefault(data);
  }
}

function formatPerson(data) {
  return {
    id: data.id,
    name: data.name,
    originalName: data.originalName,
    mediaType: "person",
    popularity: data.popularity,
    gender: data.gender,
    knowForDepartment: data.knowForDepartment,
    profilePath: data.profilePath
      ? `https://image.tmdb.org/t/p/w500${data.profilePath}`
      : null,
    knowFor: data.knowFor.map((item) => ({
      id: item.id,
      title: item.title || item.name,
      mediaType: item.mediaType,
    })),
  };
}

function formatCompany(data) {
  return {
    id: data.id,
    name: data.name,
    originalName: data.originalName,
    mediaType: "company",
    popularity: data.popularity,
    gender: data.gender,
    knowForDepartment: data.knowForDepartment,
    profilePath: null,
    knowFor: data.knowFor.map((item) => ({
      id: item.id,
      title: item.title || item.name,
      mediaType: item.mediaType,
    })),
  };
}

function formatCompany(data) {
  return data.results.map((data) => ({
    id: data.id,
    title: data.title,
    overview: data.overview,
    releaseDate: data.releaseDate,
    popularity: data.popularity,
    voteAverage: data.voteAverage,
    posterPath: data.posterPath
      ? `https://image.tmdb.org/t/p/w500${data.posterPath}`
      : null,
  }));
}

module.exports = searchFormatter;
