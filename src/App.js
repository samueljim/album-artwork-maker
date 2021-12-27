import './App.css';
import 'minireset.css'
import Shapes from './Shapes';
import { ReactComponent as Icon } from './icon.svg'

function App({ photo, name, artist }) {
  return (
    <div className="App">
      <Icon />
      <div class="container">
        <div class="text">
          {name && <h1>{name}</h1>}
          {artist && <h4>{artist}</h4>}
        </div>
        {photo && <img alt="avatar" src={photo} />}
      </div>
      <Shapes random/>
    </div>
  );
}

export default App;

App.defaultProps = {
  name: "front left long title",
  artist: "sfdafds afdsfasd fsadf sadf dasfda",
  photo: "https://source.unsplash.com/1000x1000/",
};
