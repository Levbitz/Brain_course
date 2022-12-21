const Student = ({ name, age, children }) => {
  return (
    <div className="center  ">
      <h5>Name: {name}</h5>
      <h6>Age: {age}</h6>
      <p>{children}</p>
      <button className="btn red btn-small">Details</button>
    </div>
  );
};

export default Student;
