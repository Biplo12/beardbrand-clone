import Vimeo from '@u-wave/react-vimeo';
import React from 'react';

interface IVideo {
  videoUrl: string;
}

const Video: React.FC<IVideo> = ({ videoUrl }): JSX.Element => {
  return (
    <div className="">
      <Vimeo
        video={videoUrl}
        width={'100vw'}
        height={'100vh'}
        responsive={true}
      />
    </div>
  );
};
export default Video;
