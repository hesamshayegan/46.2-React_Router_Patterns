import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useParams  } from 'react-router-dom'
import Nav from './Nav'
import DogList from './DogList';
import DogDetails from './DogDetails';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';
import tubby from './images/tubby.jpg';
import whiskey from './images/whiskey.jpg';
import './App.css';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

const DogRoute = () => {
  // Retreive name from url parameter
  const { name } = useParams();
  // case insensitive comparison
  const currentDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase())

  if (!currentDog) {
    return <h1> Doggo not found. Is Doggo missing? Doggo sad. </h1>
  }

  return <DogDetails dog={currentDog} />

}


function App() {
  return (
    <Router>
      <div className="App">
        {/* Nav will create links for each dog in dogs */}
        <Nav dogs={dogs} />
        {/* Using React "Routes/Route" v6 syntax vs "Switch/Route" which is v5  */}
        <Routes >
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogRoute />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
