import { useState } from "react";
function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Namesen",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <h2>{person.age}</h2>
      <label htmlFor="first">First Name:</label>
      <input
        id="first"
        name="first"
        type="text"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />
      <label htmlFor="last">Last Name:</label>
      <input
        id="last"
        name="last"
        type="text"
        value={person.lastName}
        onChange={handleLastNameChange}
      />
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
export default Person;
