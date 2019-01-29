import React from 'react';
import Song from './Song.js'
import SongListHeader from './SongListHeader.js';

function SongList({songs}){

  const topTwenty = songs.map((song, index) => {
    return <Song key={index} value = {index} chartPosition ={index+1} song={song}/>;
  })

  return(<>
    <table>
    <caption>iTunes Top 20 Singles Chart</caption>
    <SongListHeader />
    <tbody>
    {topTwenty}
    </tbody>
    </table>
    </>);
  }

export default SongList;
