import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = '84afb28c8f5940d198ce78f946c1d348';
        const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=84afb28c8f5940d198ce78f946c1d348';

        const response = await axios.get(url, {
          params: {
            q: query || 'technology', // Default to "technology" if no query is provided
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 10,
          },
        });

        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query]); // Refetch whenever `query` changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {articles.map((article, index) => (
        <div key={index} className="p-4 border rounded shadow-md bg-white">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-lg font-bold mt-2">{article.title}</h2>
          <p className="text-sm text-gray-600">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 block"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
