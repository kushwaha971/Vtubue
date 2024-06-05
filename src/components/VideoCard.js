import React from 'react'

const VideoCard = ({ info  }) => {
    console.log(info);
    // const {snippet,statistics} = info;
    // const snippet = info?.snippet;
    // console.log("snippert", snippet);
    // const {thumbnails, title, channelTitle}= snippet;

    const thumbnails = info?.snippet?.thumbnails;
const title = info?.snippet?.title;
const channelTitle = info?.snippet?.channelTitle;

const statistics = info?.statistics;
    // console.log("snippet",snippet);

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt='thumbnails' src={thumbnails?.medium?.url} />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount}</li>
        </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <div className='border p-1 m-1 border-red-600'>
          <VideoCard info={info} />
    </div>
   
  );

};

export default VideoCard