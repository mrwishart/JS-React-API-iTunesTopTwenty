import React from 'react';

const Song = ({song, chartPosition, value, passButtonToList})=>{

  function handleButton(event){
    const songId = event.target.id;
    passButtonToList(songId);
  }

  return (
    <tr id={value}>
    <td><b>{chartPosition}</b></td>
    <td><a href={song.link[0].attributes.href}>{song["im:name"].label}</a></td>
    <td><a href={song["im:artist"].attributes.href}>{song["im:artist"].label}</a></td>
    <td><a href={song.category.attributes.scheme}>{song.category.attributes.term}</a></td>
    <td><input type="button" value="Play" id={value} onClick={handleButton}></input></td>
    </tr>);
}

export default Song;
