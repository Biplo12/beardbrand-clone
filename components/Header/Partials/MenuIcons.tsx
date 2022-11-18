import React from 'react';
const MenuIcons: React.FC = (): JSX.Element => {
  return (
    <div className="flex gap-10 flex-col">
      <div className="flex gap-3">
        <img
          src="/static/svgs/twitter-icon.svg"
          alt="twitter icon"
          className="min-h-[20px] h-[20px]"
        />
        <img
          src="/static/svgs/facebook-icon.svg"
          alt="facebook icon"
          className="min-h-[20px] h-[20px]"
        />
        <img
          src="/static/svgs/youtube-icon.svg"
          alt="youtube icon"
          className="min-h-[20px] h-[20px]"
        />
        <img
          src="/static/svgs/instagram-icon.svg"
          alt="instagram icon"
          className="min-h-[20px] h-[20px]"
        />
        <img
          src="/static/svgs/tiktok-icon.svg"
          alt="tiktok icon"
          className="min-h-[20px] h-[20px]"
        />
        <img
          src="/static/svgs/mail-icon.svg"
          alt="email icon"
          className="min-h-[20px] h-[20px]"
        />
      </div>
    </div>
  );
};
export default MenuIcons;
