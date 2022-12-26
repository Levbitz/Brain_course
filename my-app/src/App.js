import React from "react";
import Student from "./Students";
import Couter from "./Couter";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/AboutPage/AboutUsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
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

// {
//   /*<Form />

//       <h3 className="center">My Counter</h3>

//       <Couter />

//       <h4>List of Students</h4>
//       {stundentList.map(function (singleStudent, index) {
//         return (
//           <Student
//             name={singleStudent.name}
//             age={singleStudent.age}
//             children={"Kampala"}
//           />
//         );
//       })}*/
// }
