import React from "react";
import ArticleSearch from "./components/ArticleSearch";
import ArticleList from "./components/ArticleList";

function App() {
  const handleSearch = async () => {
    const results = await ArticleSearchService();
    setArticles(results);
  };

  return (
    <div className="p-6 pt-12 min-h-screen">
      <header className="mb-6 text-center pb-5">
        <h1 className="text-4xl font-bold text-blue-600">News Aggregator</h1>
        <p className="text-gray-600 text-lg">
          Fetching news from multiple sources
        </p>
      </header>
      <ArticleSearch onSearch={handleSearch} />
      <ArticleList />
    </div>
  );
}

export default App;
