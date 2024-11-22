export const mapArticlesToStructure = (articles, source) => {
  return articles.map((article) => ({
    id: article.id || article.url || "",
    source: source || "Unknown source",
    title: article.title || article.webTitle || "",
    author: article.author || article.fields?.byline || "Unknown author",
    discription: article.description || article.fields?.trailText || "",
    content: article.content || article.fields?.body || article.webUrl || "",
    publicationDate: article.publishedAt || article.webPublicationDate || "",
    img: article.urlToImage || article.fields?.thumbnail || "",
    url: article.url || article.webUrl || "",
  }));
};
