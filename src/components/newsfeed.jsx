import React from "react";
import { ArrowRight } from "lucide-react";

const NewsFeed = ({ title, author, description, url, urlToImage, publishedAt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex justify-center p-4  transition-colors"
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-2">
            <img
              src={urlToImage || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
              alt="NewsImage"
              className="h-48 w-full object-cover md:w-64 md:h-64 rounded-lg"
            />
          </div>
          <div className="p-4 md:p-6 flex flex-col justify-between">
            <div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black line-clamp-2 md:line-clamp-3">
                {title}
              </h2>
              <div className="flex gap-1 items-center tracking-wide text-sm text-indigo-500 font-semibold">
                News
                <p className="text-gray-500 text-sm line-clamp-1">
                  by {author || "Unknown"} / {new Date(publishedAt).toLocaleString()}
                </p>
              </div>
              <p className="mt-2 text-gray-500 text-sm line-clamp-3 md:line-clamp-4">
                {description}
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center text-blue-600 hover:underline">
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
