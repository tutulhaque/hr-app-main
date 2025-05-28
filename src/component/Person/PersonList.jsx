import React from "react";
import { useOutletContext } from "react-router-dom";
import PersonCard from "./PersonCard";

const PersonList = () => {
  const { persons } = useOutletContext();

  return (
    <div className="p-8">
      <h1 className="text-3xl text-center mb-8">Employee List</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {persons.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;
