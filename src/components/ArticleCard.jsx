import React from "react";

const ArticleCard = ({ article, onSelect }) => {
  const {
    author = "Unknown Author",
    source = "Unknown Source",
    img = "https://via.placeholder.com/150",
    title,
    publicationDate,
    description,
  } = article;

  return (
    <div
      className="bg-white rounded shadow-md hover:shadow-lg transition p-4 cursor-pointer"
      onClick={() => onSelect(article)}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <div className="text-sm text-gray-400 mb-2">
        <p>{source}</p>
        <p>{author}</p>
        <p>{new Date(publicationDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
