import React, { createContext, useState, useContext } from "react";
import { SOURCES } from "../constant/Sources";

export const SearchContext = createContext();

export const useArticleList = () => {
  const { articleList } = useContext(SearchContext);
  return { articleList };
};

export const SearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState();
  const [selectedSources, setSelectedSources] = useState(Object.keys(SOURCES));

  const [articleList, setArticleList] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        keyword,
        setKeyword,
        category,
        setCategory,
        selectedSources,
        setSelectedSources,
        articleList,
        setArticleList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
