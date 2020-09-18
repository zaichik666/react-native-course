import React, { useState, useEffect } from "react";
import CreateList from './create-list'
import "../css/app.css";
import unicorn from "../assets/unicorn.png";
import info from "../assets/text.json";
import contacts from "../assets/contacts.json";

function App() {
  const [coords, setCoords] = useState(0)
  const contactLinks = Object.keys(contacts).map(it => `${it}: ${contacts[it]}`)
  const name = "Mary Sitnikova";

  useEffect(() => {
    document.addEventListener('scroll', function () { setCoords(window.pageYOffset)})
    return () => {document.removeEventListener("scroll", function () {
      setCoords(window.pageYOffset);
    });}
  }, [])

  let alpha = window.pageYOffset >= 500 ? 1 : (coords * 2 % 1000) / 1000
  let color = { backgroundColor: `rgba(130, 240, 255,${alpha})` };

  return (
    <div className="App">
      <div className="first-block" style={color}>
        <div className="unicorn">
          <img className="unicorn-img" src={unicorn} alt="Unicorn" />
        </div>

        <div className="name">
          <div className="name-content">
            <h1 className="my-name">{name}</h1>
            <CreateList list={contactLinks} symbol={""} />
          </div>
        </div>
      </div>

      <div className="second-block" style={color}>
        <div className="skills">
          <div className="skills-content">
            <h1>Skills:</h1>
            <CreateList list={info.skills} symbol={"☆"} />
          </div>
        </div>

        <div className="about">
          <div className="about-content">
            <h1>About me</h1>
            {info.about_me}
            <h1>Experience</h1>
            <CreateList list={info.experience} symbol={"-"} />
            <h1>Education</h1>
            {info.education}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
