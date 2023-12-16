import "./App.css";
import AllWeather from "./Components/AllWeather";
import SearchWeather from "./Components/ShearchWeather";
import Index from "./Components/Weather";

function App() {
  return <div>
    <SearchWeather />
    <Index />
    <AllWeather />
  </div>;
}

export default App;
