import VideoList from "./VideoList.js";
import exampleVideoData from "../data/exampleVideoData.js";
import VideoPlayer from "./VideoPlayer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }
  
  onTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    
    return (
<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videoList} function={this.onTitleClick}/>
      </div>
    </div>
  </div>);

  }

}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
