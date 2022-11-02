import React from 'react';
import Article from './Article';
const ArticlesSide: React.FC = (): JSX.Element => {
  return (
    <div className="h-full min-h-[200vh] w-[50%] bg-white mxlg:w-full">
      <Article
        articleData="Oct 14, 2022"
        articleTitle="7 BEST WAYS TO WEAR COWBOY BOOTS"
        articleImage="/static/assets/article-1.png"
      />
      <Article
        articleData="Oct 07, 2022"
        articleTitle="HOW TO GROW THE YEARD"
        articleImage="/static/assets/article-2.png"
      />
      <Article
        articleData="Sep 30, 2022"
        articleTitle="TOP 10 WAYS TO USE UTILITY OIL"
        articleImage="/static/assets/article-3.png"
      />
      <Article
        articleData="Sep 09, 2022"
        articleTitle="HOW TO GROW AN AMAZING HANDLEBAR MUSTACHE"
        articleImage="/static/assets/article-4.png"
      />
    </div>
  );
};
export default ArticlesSide;
