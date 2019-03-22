import React from 'react';

const Gif = ({ id }) => {
  const src = `https://media2.giphy.com/media/${id}/200.gif`;
  return (
    <img src={src} className="gif" alt="" />
  );
};

export default Gif;
