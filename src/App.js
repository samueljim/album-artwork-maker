import './App.css';
import 'minireset.css'
import Shapes from './Shapes';
import { ReactComponent as Icon } from './icon.svg'
import { useState, useEffect } from 'react';
function App({ name, artist }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowHeight(window.innerHeight);
    });
  }, [window.innerHeight]);
  return (
    <div className="App">
      {/* <Icon /> */}
      <div className="container">
        <div className="border">
          <div className="text">
            {name && (
              <h1>
                <outfit-limiter textfit max-lines="3">
                  {name}
                </outfit-limiter>
              </h1>
            )}
            {artist && (
              <h4>
                <outfit-limiter textfit max-lines="1">
                  {artist}
                </outfit-limiter>
              </h4>
            )}
          </div>
        </div>
        <img
          alt="avatar"
          src={`https://source.unsplash.com/${windowWidth}x${windowHeight}`}
        />
      </div>
      <Shapes random />
    </div>
  );
}

export default App;

App.defaultProps = {
  name: "front left",
  artist: "spotify",
};
