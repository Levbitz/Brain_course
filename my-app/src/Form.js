import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const invalid = name === "" || age === "";

  const getCred = () => {
    //send to db
    alert("your name is" + name + "and your age is " + age);
  };
  return (
    <div>
      <h5>My Form</h5>

      <h1>{name}</h1>
      <div className="container">
        <div>
          <label htmlFor="">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            type="text"
            id=""
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="text"
            name="age"
            id=""
          />
        </div>

        <button disabled={invalid} onClick={getCred} className="btn indigo">
          Send
        </button>
      </div>
    </div>
  );
}

export default Form;
