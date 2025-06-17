import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const API_HOST = "jsearch.p.rapidapi.com";

export const getJobs = async ({ query, page, country, date_posted, limit }) => {
  try {
    const response = await axios.get("https://jsearch.p.rapidapi.com/search", {
      params: {
        query,
        page,
        num_pages: 1,
        country,
        date_posted,
        limit,
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "❌ Error fetching jobs:",
      error.response?.data || error.message
    );
    return { data: [] };
  }
};
