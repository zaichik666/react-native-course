import React from "react";
import "./App.css";
import about from "./text";
import unicorn from "./unicorn.jpg"

function App() {
  const tags = Object.keys(about)
  const makeHeader = (str) => str[0].toUpperCase().concat(str.slice(1))

  return (
    <div className="App">
      <div className="column">
        <img src={unicorn} alt="Unicorn" width="100px" />
        <h1>Skills:</h1>
        {about.skills.map(it => {
          return <>☆ {it} <br/></>;
        })}
      </div>
      <div className="main-content">
        {tags.filter(it => it !== 'skills').map(it => {
          return (
            <>
              <h1 className="main-header" key={it}>{makeHeader(it)}</h1>
              <p>{about[it]}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
