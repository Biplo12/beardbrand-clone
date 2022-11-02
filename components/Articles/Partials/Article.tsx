import React from 'react';

interface IArticle {
  articleData: string;
  articleTitle: string;
  articleImage: string;
}

const Article: React.FC<IArticle> = ({
  articleData,
  articleTitle,
  articleImage,
}): JSX.Element => {
  return (
    <div className="flex text-black justify-center items-end border-t-[1px] border-l-[1px] border-charleston-green border-opacity-10 ease duration-500 cursor-pointer hover:bg-[#F2F1F0]">
      <div className="flex flex-col gap-1 w-1/2 p-10 ">
        <h4 className="text-sm">{articleData}</h4>
        <h1 className="text-xl font-bold link link-underline link-underline-black max-w-[500px]">
          {articleTitle}
        </h1>
      </div>
      <div className="w-1/2">
        <img
          src={articleImage}
          alt="article"
          className="w-full h-[500px] object-cover hover:scale-110 overflow-hidden"
        />
      </div>
    </div>
  );
};
export default Article;
