import React from "react";
import Student from "./Students";

const App = () => {
  return (
    <React.Fragment>
      <h1>List of Students</h1>
      <Student name={"Brain"} age={20} children={"Kampala"} />
      <Student name={"Justine"} age={30} children={"Mukono"} />
      <Student name={"Winnie"} age={40} children={"Nansana"} />
      <Student name={"Sam"} age={50} />
    </React.Fragment>
  );
};

export default App;

//jsx
//components ===> migration
//Props
