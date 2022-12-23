import React from "react";
import Student from "./Students";
import Couter from "./Couter";
import Form from "./Form";

import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <React.Fragment>
      <HomePage />

      {/*<Form />

      <h3 className="center">My Counter</h3>

      <Couter />

      <h4>List of Students</h4>
      {stundentList.map(function (singleStudent, index) {
        return (
          <Student
            name={singleStudent.name}
            age={singleStudent.age}
            children={"Kampala"}
          />
        );
      })}*/}
    </React.Fragment>
  );
};

export default App;

//jsx
//components ===> migration
//Props

//Javascript
//high order functions
// const brain = function (a, b) {};
// const brain2 = function (a, brain) {};
//useEffect

const stundentList = [
  {
    id: 1,
    name: "Brain",
    age: 20,
  },
  {
    id: 2,
    name: "Justine",
    age: 20,
  },
  {
    id: 2,
    name: "Winnie",
    age: 20,
  },
  {
    id: 4,
    name: "Sam",
    age: 30,
  },
];
