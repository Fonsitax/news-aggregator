import axios from "axios";
import { CATEGORIES } from "../constant/Category";

const NEWS_API_KEY = "84afb28c8f5940d198ce78f946c1d348";
const proxyUrl =
  "http://cors-anywhere-env-2-env.eba-a9xzgtci.eu-central-1.elasticbeanstalk.com/";
const BASE_URL = "https://newsapi.org/v2";

const newsApiClient = axios.create({
  baseURL: proxyUrl + BASE_URL,
  //baseURL: BASE_URL,
  headers: {
    "X-Api-Key": NEWS_API_KEY,
  },
});

export const fetchTopHeadlines = async (q = keyword, cat, pageSize = 10) => {
  try {
    const category = CATEGORIES[cat];
    const newsApiCategory = category?.newsApi;

    const response = await newsApiClient.get("/top-headlines", {
      params: {
        category: newsApiCategory || "",
        q,
        pageSize,
      },
    });

    return response.data.articles || [];
    {
    }
  } catch (error) {
    handleApiError(error);
    return [];
  }
};

const handleApiError = (error) => {
  if (error.response) {
    console.error("API error:", error.response.data);
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Error setting up request:", error.message);
  }
};

export default newsApiClient;
