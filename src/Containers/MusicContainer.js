import React, {Component} from 'react';
import SongList from '../Components/SongList.js';
import CurrentlyPlaying from '../Components/CurrentlyPlaying.js';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();

    request.open("GET", url);
    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      const songList = JSON.parse(jsonString);
      this.setState({songs: songList.feed.entry});
      console.log(this.state.songs);
    })
    request.send();
  }

  render(){
    return(
      <>
      <CurrentlyPlaying currentSong={this.state.currentSong}/>
      <SongList songs={this.state.songs} />
      </>
    );
  }
}

export default MusicContainer;
