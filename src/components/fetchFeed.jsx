import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsFeed from "./newsfeed";
import { X } from "lucide-react";

const FetchFeed = () => {
  const [feed, setFeed] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_APIKEY}`;


    axios.get(apiUrl)
      .then((response) => {
        setFeed(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const closePopup = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="relative flex justify-center p-4 transition-all duration-500 ease-in-out">
      {/* News List */}
      <div
        className={`grid gap-4 transition-transform duration-300 ease-in-out overflow-y-auto ${
          selectedArticle ? "md:w-1/2 w-full md:mr-4" : "w-full max-w-4xl"
        } scrollbar-hide`}
        style={{ maxHeight: "100vh" }}
      >
        {feed.map((article, index) => (
          <NewsFeed
            key={index}
            title={article.title}
            author={article.author}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
            onClick={() => handleArticleClick(article)}
          />
        ))}
      </div>

      {/* Article Preview */}
      {selectedArticle && (
        <div className="fixed inset-y-0 right-0 z-50 md:relative md:w-1/2 bg-yellow-100 p-4 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out">
          <div className="relative h-full flex flex-col">
            <button
              onClick={closePopup}
              className="text-black hover:bg-yellow-200 rounded-sm absolute top-2 right-2 transition-colors duration-200"
            >
              <X width={28} height={28} />
            </button>
            <div className="flex-grow overflow-y-auto p-2">
              <h2 className="text-xl font-bold">{selectedArticle.title}</h2>
              <p className="text-gray-500">
                {selectedArticle.author} /{" "}
                {new Date(selectedArticle.publishedAt).toLocaleString()}
              </p>
              <img
                src={
                  selectedArticle.urlToImage || "https://via.placeholder.com/400"
                }
                alt="Selected News"
                className="my-4 w-full h-64 object-cover rounded transition-transform duration-200 hover:scale-105"
              />
              <p>{selectedArticle.description}</p>
              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Read full article
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchFeed;
