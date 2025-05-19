import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
import employee from "./component/Person/employee";

const Root = () => {
  const [persons, setPersons] = useState(employee);

  const handleAddEmployee = (newEmp) => {
    setPersons((prev) => [...prev, newEmp]);
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <main className="min-h-96">
        <Outlet context={{ persons, handleAddEmployee }} />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
