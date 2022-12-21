import React from "react";
import Student from "./Students";
import Couter from "./Couter";

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

const App = () => {
  return (
    <React.Fragment>
      <h3 className="center">My Counter</h3>

      <Couter />

      <h4>List of Students</h4>
      {stundentList.map((singleStudent, index) => {
        return (
          <Student
            key={index}
            name={singleStudent.name}
            age={singleStudent.age}
            children={"Kampala"}
          />
        );
      })}
    </React.Fragment>
  );
};

export default App;

//jsx
//components ===> migration
//Props
