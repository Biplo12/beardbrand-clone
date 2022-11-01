import React, { useEffect, useRef, useState } from 'react';
import ArticlesSide from './Partials/ArticlesSide';
import TextSide from './Partials/TextSide';
import { useIntersection } from 'react-use';
const Articles: React.FC = (): JSX.Element => {
  const [sticky, setSticky] = useState(false);
  const articles = useRef(null);

  return (
    <div className="flex w-full h-auto mxlg:flex-col" ref={articles}>
      <TextSide sticky={sticky} />
      <ArticlesSide />
    </div>
  );
};
export default Articles;
