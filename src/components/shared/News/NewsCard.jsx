import React from "react";

function NewsCard({ article }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={article.article_photo_url}
        alt="Article"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {article.article_title}
        </h2>
        <p className="text-sm text-gray-500">
          {article.source} -{" "}
          {new Date(article.post_time_utc).toLocaleDateString()}
        </p>
        <a
          href={article.article_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 block hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
