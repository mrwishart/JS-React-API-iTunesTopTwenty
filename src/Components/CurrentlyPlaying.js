import React from 'react';

function CurrentlyPlaying({currentSong}){
  if (!currentSong) {return null;}
  else {
  return (
    <footer>
    <p>
    <b>Currently Playing:</b> {currentSong["im:name"].label} by {currentSong["im:artist"].label}
    </p>
    <audio src={currentSong.link[1].attributes.href} controls="controls" autoPlay="autoplay"/>
    </footer>
  );
}
}

export default CurrentlyPlaying;
