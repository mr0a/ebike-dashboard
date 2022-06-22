import './App.css';
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import React from 'react';

function getColorMode(){
  let color = window.localStorage.getItem('colorMode') === 'dark' ? 'dark' : 'light'
  if ( color === 'dark'){
    return true
  }
  window.localStorage.setItem('colorMode', 'light')
  return false
}

function App() {
  
  const [isDarkMode, setIsDarkMode] = React.useState(getColorMode);
  const [speed, setSpeed] = React.useState(30);
  const [battery, setBattery] = React.useState(90);
  const [time, setTime] = React.useState(new Date());

  // console.log("Rendered");
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  React.useEffect(() => {
    console.log("Color mode changed", isDarkMode ? "dark": "light");
    window.localStorage.setItem("colorMode", isDarkMode ? "dark": "light")
  }, [isDarkMode])
  
  React.useEffect(() => {
    let timeInterval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    // console.log("Re-rendered")

    // let speedInterval = setInterval(() => {
    //   setSpeed(current => {
    //         if (current < 10) return current = 30
    //         return current + getRandomInt(-2, 2)
    //       }
    //     )
    // }, 1000)
    let speedInterval = setInterval(() => {
      fetch('/api/speed').then(data => {
        data.json().then( data => {
          setSpeed(data.speed)
        })
      }).catch(err => {
        // console.log(err)
      })
    }, 1000);

    return () => {
      clearInterval(timeInterval)
      clearInterval(speedInterval)
      // console.log("Cleared");
    }
  })
  
  let themeClass = isDarkMode ? " dark" : " light"
  document.body.style.backgroundColor = isDarkMode ? "#282c34" : "white";
  document.body.style.transition = "background-color 1s";

  return (
    <div className={"container" + themeClass}>
      <header>
        <div className="header-content">
            <h3 className="date">27 Nov, 2021 Sat</h3>
            <h3 className="date">{time.toLocaleTimeString()}</h3>
          <DarkModeToggle
            onChange={setIsDarkMode}
            isDarkMode={isDarkMode}
            size={80}
          />
        </div>
      </header>

      <section className="main">
        <div className="main-container">
          <div className="data-container">
            <h3>Speed</h3>
            <p> <span className="data-value">{speed}</span> km/hr</p>
          </div>
          <div className="data-container">
            <h3>Battery</h3>
            <p> <span className="data-value">{battery}</span> %</p>
          </div>
          <div className="data-container">
            <h3>Distance</h3>
            <p> <span className="data-value">1942</span> km</p>
          </div>
          <div className="data-container">
            <h3>Temperature</h3>
            <p> <span className="data-value">65</span> &#8451;</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
