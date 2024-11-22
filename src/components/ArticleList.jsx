import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import { useArticleList } from "../context/SearchContext";

const ArticleList = () => {
  const [selectedArticle, setSelectedArticle] = useState();
  const { articleList } = useArticleList();

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="p-4">
      {selectedArticle ? (
        <div>
          <button
            onClick={handleBack}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Articles
          </button>
          <h1 className="text-2xl font-bold my-4">{selectedArticle.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            By {selectedArticle.author} | Published on{" "}
            {new Date(selectedArticle.publicationDate).toLocaleDateString()}
          </p>
          <img
            src={selectedArticle.img}
            alt={selectedArticle.title}
            className="w-full mb-4 rounded"
          />
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />
          {selectedArticle.url && (
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-4 block"
            >
              Read more on the original site
            </a>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articleList.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              onSelect={handleCardClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
