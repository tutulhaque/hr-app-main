import { useOutletContext } from "react-router-dom";
import PersonCard from "./PersonCard";
const PersonList = () => {
  const { persons, setPersons } = useOutletContext();
  const handleUpdate = (updatedPerson) => {
    setPersons((prev) =>
      prev.map((p) => (p.id === updatedPerson.id ? updatedPerson : p))
    );
  };
  return (
    <div className="p-8">
      <h1 className="p-8 text-3xl text-center">Employee List</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {persons.map((person) => (
          <PersonCard key={person.id} person={person} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;
