import { useState } from "react";
import PersonCard from "./PersonCard";
import employee from "./employee"; //

const PersonList = () => {
  const [persons, setPersons] = useState(employee);
  console.log(persons);

  return (
    <div className="p-8">
      <h1 className="p-8 text-3xl text-center">Personal Details</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {persons.map((person) => (
          <PersonCard key={person.id} person={person}></PersonCard>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
