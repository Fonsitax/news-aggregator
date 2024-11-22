import React, { useContext, useState } from "react";
import { CATEGORIES } from "../constant/Category";
import { SOURCES } from "../constant/Sources";
import { SearchContext } from "../context/SearchContext";
import { ArticleSearchService } from "../services/ArticleSearchService";

const ArticleSearch = () => {
  const [error, setError] = useState("");

  const {
    keyword,
    setKeyword,
    category,
    setCategory,
    selectedSources,
    setSelectedSources,
    setArticleList,
  } = useContext(SearchContext);

  const toggleSourceSelection = (source) => {
    setSelectedSources((prevSelected) =>
      prevSelected.includes(source)
        ? prevSelected.filter((selectedSources) => selectedSources !== source)
        : [...prevSelected, source]
    );
  };

  const handleCategoryChange = (category) => {
    setCategory((prevSelected) =>
      prevSelected === category
        ? (prevSelected = null)
        : (prevSelected = category)
    );
  };

  const onSearch = async () => {
    if (selectedSources.length === 0) {
      setError("Please select at least one API to search.");
      return;
    }

    if (category === null) {
      setError("Please select a category to search.");
      return;
    }

    setError("");

    const results = await ArticleSearchService(
      keyword,
      category,
      selectedSources
    );
    setArticleList(results);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {Object.entries(CATEGORIES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            className={`p-2 rounded ${
              category === key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {value.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {Object.entries(SOURCES).map(([key, { label, id }]) => (
          <button
            key={key}
            onClick={() => toggleSourceSelection(id)}
            className={`p-2 rounded ${
              selectedSources.includes(id)
                ? "bg-blue-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mb-6 text-center pt-5">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search articles..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="p-2 border rounded w-full max-w-lg sm:w-auto"
          />
          <button
            onClick={onSearch}
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSearch;
