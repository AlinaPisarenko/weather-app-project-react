import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp city="New York" />
      <footer>
        This project was coded by Alina Pisarenko and is{" "}
        <a
          href="https://github.com/AlinaPisarenko/weather-app-project-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
