

import Home from "./components/home/Home";
import DB from "./data/db.json";

function App() {
  return (
    <div className="App">
      
      <Home data = {DB}/>
      


    </div>
  );
}

export default App;
