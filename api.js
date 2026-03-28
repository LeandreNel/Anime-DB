/**
 * API Integration
 * This handles all communication with the Anime DB API (via RapidAPI).
 * It provides functions to fetch anime data and search for specific anime titles.
 */

import axios from "axios";

// Base URL for the Anime DB API
const API_URL = "https://anime-db.p.rapidapi.com/anime";

// API authentication headers, credentials for RapidAPI service
const API_HEADERS = {
  "X-RapidAPI-Key": "633c5a02c4mshf1189c13d413376p1fcf27jsn3dc5046555f0",
  "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
};

/**
 * Fetch a paginated list of anime.
 * @param {number} page - Page number (default: 1)
 * @param {number} size - Number of items per page (default: 10)
 * @returns {Promise<{ data: Array, meta?: Object }>}
 */
export async function getAnimeList(page = 1, size = 10) {
  try {
    const response = await axios.get(API_URL, {
      headers: API_HEADERS,
      params: { page, size },
    });

    console.log("API response:", response.data); // log only useful data
    return response.data; // contains { data, meta }
  } catch (error) {
    console.error(
      // error message
      "Error fetching anime:",
      error.response?.data || error.message,
    );
    return { data: [], meta: {} }; // consistent fallback
  }
}

/**
 * Search anime by keyword.
 * @param {string} keyword - Search term
 * @returns {Promise<{ data: Array, meta?: Object }>} Search results
 */

// defines searchAnime function to query the API for anime matching the keyword
export async function searchAnime(keyword) {
  try {
    const response = await axios.get(API_URL, {
      headers: API_HEADERS,
      params: { page: 1, size: 10, search: keyword },
    });

    // return stratement and error handling for searchAnime function
    return response.data;
  } catch (error) {
    console.error(
      "Error searching anime:",
      error.response?.data || error.message,
    );
    return { data: [], meta: {} }; // consistent fallback
  }
}
