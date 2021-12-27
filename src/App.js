import './App.css';
import 'minireset.css'
import Shapes from './Shapes';
import { ReactComponent as Icon } from './icon.svg'

function App({ photo }) {
  return (
    <div className="App">
      <Icon />
      <div class="container">
        {photo && <img alt="avatar" src={photo} />}
      </div>
      <Shapes />
    </div>
  );
}

export default App;

App.defaultProps = {
  photo: 'https://images.unsplash.com/photo-1620589025695-d6a796305be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80',
}
