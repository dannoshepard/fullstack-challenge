import axios from "axios";
import BoxscoreContainer from './boxscore/BoxscoreContainer';

export const axiosInstance = axios.create({
  baseURL: "/api"
});

function App() {
  return (
    <div>
      <BoxscoreContainer/>
    </div>
  );
}

export default App;
