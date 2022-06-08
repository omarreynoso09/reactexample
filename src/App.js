import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { unhover } from "@testing-library/user-event/dist/hover";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent />
      </header>
    </div>
  );
}

const MyInfoComponent = () => {
  // const [myAge, setMyAge] = useState(0);
  const [myFavoriteColor, setMyFavoriteColor] = useState("");
  const [myName, setMyName] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  return (
    <div>
      <p
        style={{
          backgroundColor: myFavoriteColor,
          textTransform: "uppercase",
          textAlign: "center",
          border: "1px double white",
          borderRadius: "10px",
        }}
      >
        {myName}
      </p>
      <p
        style={{
          backgroundColor: myFavoriteColor,
          textTransform: "uppercase",
          textAlign: "center",
          border: "1px double white",
          borderRadius: "10px",
        }}
      >
        {myFavoriteColor}
      </p>
      {/* <p>{myFavoriteColor}</p> */}
      {/* <p>{favoriteMovies}</p> */}
      {favoriteMovies.map((movie) => (
        <span
          style={{
            backgroundColor: myFavoriteColor,
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px double white",
            margin: "25px",
            padding: "10px 10px 15px 15px",
            borderRadius: "10px",
          }}
        >
          {movie} &nbsp;
        </span>
      ))}
      <br></br>
      <hr
        style={{
          marginTop: "5%",
          paddingTop: "10px",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      ></hr>
      <br></br>
      <label>
        Type Your Name &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newName = event.target.value;
            setMyName(newName);
          }}
        ></input>
      </label>
      <br></br>
      <label>
        Type your Color &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newColor = event.target.value;
            setMyFavoriteColor(newColor);
          }}
        ></input>
      </label>
      <br></br>
      <label>
        Best Movie &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setFavoriteMovies([newMovie, favoriteMovies[1], favoriteMovies[2]]);
          }}
        ></input>
      </label>
      &nbsp;
      <label>
        Good Movie &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setFavoriteMovies([favoriteMovies[0], newMovie, favoriteMovies[2]]);
          }}
        ></input>
      </label>
      &nbsp;
      <label>
        Last movie &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setFavoriteMovies([favoriteMovies[0], favoriteMovies[1], newMovie]);
          }}
        ></input>
      </label>
    </div>
  );
};
export default App;
