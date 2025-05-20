// Root.jsx
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Root = () => {
  const [persons, setPersons] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/employees")
  //     .then((res) => res.json())
  //     .then((data) => setPersons(data))
  //     .catch((err) => console.error("Error fetching employees:", err));
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => setPersons(res.data));
  }, []);

  const handleAddEmployee = (newEmp) => {
    setPersons((prev) => [...prev, newEmp]);
  };

  return (
    <>
      <Header />
      <Banner />
      <main className="min-h-96">
        <Outlet context={{ persons, handleAddEmployee }} />
      </main>
      <Footer />
    </>
  );
};

export default Root;
