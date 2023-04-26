

import TourDetails from "./components/TourDetails/TourDetails";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DB from "./data/db.json";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    
    <Header/>
    <Routes>
      <Route path='/' element={<Home data = {DB}/>}></Route>
    </Routes>
   
    <Routes>
        <Route path="/city/:id" element={<TourDetails datas = {DB}/>} />
      </Routes>
    </>
  );
}

export default App;
