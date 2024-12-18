import React from "react";

const Articles = ({ articles }) => {
  console.log("art",articles);
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-24">
      <h2 className="text-center text-3xl mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
      {Array.isArray(articles?.articles) && articles?.articles.length > 0 ? (
articles.articles.map((article, index) => (
    <div
      key={index}
      className="border border-gray-300 p-4 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:border-primary hover:shadow-[0_4px_15px_rgba(253,113,73,0.5)]"
    >
      <img
        src={article.image}
        alt={`Article ${index + 1}`}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl text-heading font-bold mt-7">{article.title}</h3>
      <p className="text-content mt-8 text-sm">{article.content}</p>
      <div className="mt-8">
        <button className="bg-primary text-white px-4 py-2 rounded">
          {article.buttonText}
        </button>
      </div>
    </div>
  ))
) : (
  <p>No articles available.</p>
)}


      </div>
    </div>
  );
};

export default Articles;
