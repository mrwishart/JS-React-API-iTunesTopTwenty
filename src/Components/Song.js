import React from 'react';

function Song({song, chartPosition}){
  return (
    <tr>
    <td>{chartPosition}</td>
    <td><a href={song.link[0].attributes.href}>{song["im:name"].label}</a></td>
    <td><a href={song["im:artist"].attributes.href}>{song["im:artist"].label}</a></td>
    <td><a href={song.category.attributes.scheme}>{song.category.attributes.term}</a></td>
    <td><input type="button" value="Play"></input></td>
    </tr>);
}

export default Song;
