const Student = ({ name, age, children }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Age: {age}</h3>
      <h4>{children}</h4>
    </div>
  );
};

export default Student;
