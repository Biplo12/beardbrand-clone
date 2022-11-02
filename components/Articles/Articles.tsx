import React, { useState } from 'react';
import ArticlesSide from './Partials/ArticlesSide';
import TextSide from './Partials/TextSide';
import { InView, useInView } from 'react-intersection-observer';
const Articles: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full h-full mxlg:flex-col">
      <TextSide />
      <ArticlesSide />
    </div>
  );
};
export default Articles;
