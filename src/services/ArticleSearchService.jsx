import { SOURCES } from "../constant/Sources";
import { mapArticlesToStructure } from "./ArticleService";
import { fetchTopHeadlines } from "../api/NewsApi";
import { fetchGuardianArticles } from "../api/TheGuardianApi";

export const ArticleSearchService = async (
  keyword,
  category,
  selectedSources
) => {
  const results = [];

  if (selectedSources.includes(SOURCES.NEWS_API.id)) {
    const newsApiResults = await fetchTopHeadlines(keyword, category);
    const mappedArticles = mapArticlesToStructure(
      newsApiResults,
      SOURCES.NEWS_API.label
    );
    results.push(...mappedArticles);
  }

  if (selectedSources.includes(SOURCES.THE_GUARDIAN.id)) {
    const guardianResults = await fetchGuardianArticles(keyword, category);
    const mappedArticles = mapArticlesToStructure(
      guardianResults,
      SOURCES.THE_GUARDIAN.label
    );

    results.push(...mappedArticles);
  }

  return results;
};
