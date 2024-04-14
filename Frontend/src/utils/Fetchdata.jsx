// API FETCH HELPER

const baseURL = "https://api.themoviedb.org/3/";

// Fetch - GET - If no swedish, get english description
export const fetchGET = async (endpoint, token, language = "en-US") => {
  // take baseURL + endpoint value and send req
  const url = `${baseURL}${endpoint}?language=${language}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("TMDB Network response failed.");
      }
      return response.json();
    })
    .then((data) => {
      // if description/bio is avalible return it
      if (data.overview) {
        return data;
      } else {
        // get data in English
        return fetch(`${baseURL}${endpoint}?language=en-US`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("TMDB Network response failed.");
            }
            return response.json();
          })
          .catch((error) => {
            console.error("Error fetching data in English", error);
          });
      }
    })
    .catch((error) => {
      console.error("Error fetching data in Swedish", error);
      throw error;
    });
};

// Fetch - GET - OLD
/* export const fetchGET = async (endpoint, token, language = "en-US") => {
  // take baseURL + endpoint value and send req
  const url = `${baseURL}${endpoint}?language=${language}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("TMDB Network response failed.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data", error);
      throw error;
    });
}; */

// Fetch - POST (dont know if needed yet)
export const FetchPOST = (endpoint, data) => {
  const url = `${baseURL}${endpoint}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("TMDB Network response failed.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Failed to POST data", error);
      throw error;
    });
};
