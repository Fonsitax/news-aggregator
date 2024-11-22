import axios from "axios";
import { CATEGORIES } from "../constant/Category";

const GUARDIAN_API_KEY = "c9fec133-9671-442a-8cf9-e78aa9db9500";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://content.guardianapis.com";

const guardianApiClient = axios.create({
  baseURL: proxyUrl + BASE_URL,
});

export const fetchGuardianArticles = async (
  q = keyword,
  section = category || "",
  page = 1,
  pageSize = 10
) => {
  try {
    const category = CATEGORIES[section];
    const theGuardianSection = category?.theGuardian;

    const response = await guardianApiClient.get("/search", {
      params: {
        q,
        section: theGuardianSection,
        page,
        "page-size": Number(pageSize),
        "api-key": GUARDIAN_API_KEY,
        "show-fields": "trailText,bodyText,thumbnail,byline,body",
      },
    });
    return response.data.response.results;
  } catch (error) {
    console.error(
      "Error fetching articles from The Guardian:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default guardianApiClient;
