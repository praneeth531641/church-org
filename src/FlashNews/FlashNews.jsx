import React from 'react';
import './FlashNews.css';

const FlashNews = ({ news }) => {
  return (
    <div className="flash-news-container">
      <h3>Flash News</h3>
      <marquee className="flash-news">{news}</marquee>
    </div>
  );
};

export default FlashNews;
