import axios from "axios";

const NEWS_API_KEY = import.meta.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const newsApiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Api-Key": NEWS_API_KEY,
    },
});

export const fetchArticles = async (query) => {
    try {
        const response = await newsApiClient.get("/everything", {
            params: {
                q: query,
                language: "en",
                sortBy: "publishedAt",
                pageSize: 10,
                apiKey: NEWS_API_KEY,
            },
        });
        return response.data.articles;

    } catch (error) {
        console.error('Error fetching articles', error);
        return [];
    }
};

export default newsApiClient;