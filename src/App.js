import logo from './logo.svg';
import './App.css';
import Spotify from './component/Spotify';
import Instagram from './component/Instagram';
import TikTok from './component/TikTok';
function App() {
  return (
    <div className="App">
      <Spotify></Spotify>
      <br></br>
      <br></br>
      <Instagram></Instagram>
      <br>
      </br>
      <br></br>
      <TikTok></TikTok>
    </div>
  );
}

export default App;
