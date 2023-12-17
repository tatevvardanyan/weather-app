import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Components/Weather";
import Settings from "./Components/Settings";

function App() {
  const currentDate=new Date();
  const year=currentDate.getFullYear();
  const month=currentDate.getMonth()+1
  const day=currentDate.getDate()
  return <div className="big">
    <h1 style={{color:"whitesmoke"}}>{year} - {month} - {day}</h1>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
