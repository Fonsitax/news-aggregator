import React, { useEffect, useState } from 'react'
import  { fetchArticles } from './services/newsApi';
import NewsFeed from './components/NewsFeed';


function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600">News Aggregator</h1>
        <input
          type="text"
          placeholder="Search for news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-4 p-2 border rounded w-full max-w-lg"
        />
      </header>
      <main>
        <NewsFeed query={query} />
      </main>
    </div>
  );
}

export default App;
