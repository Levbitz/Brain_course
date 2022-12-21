import React, { useState } from "react";

function Couter() {
  const [myCount, setMyCount] = useState("Brain");

  const increaseHandler = () => setMyCount(myCount + 1);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col l4 s4">
            <button className=" btn red">decrease</button>
          </div>
          <div className="col l4 s4">
            <h1>{myCount}</h1>
          </div>
          <div className="col l4 s4">
            <button onClick={increaseHandler} className="btn green">
              increase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couter;
