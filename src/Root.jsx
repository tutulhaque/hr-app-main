import React, { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import useAxios from "./hooks/useAxios";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

const Root = () => {
  const { get } = useAxios();
  const [persons, setPersons] = useState([]);

  // Fetch employees
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await get("/employees");
        setPersons(res.data);
      } catch (err) {
        console.error("Failed to fetch employees", err);
      }
    };
    fetchData();
  }, [get]);

  // Add Employee
  const handleAddEmployee = useCallback((newPerson) => {
    setPersons((prev) => [...prev, newPerson]);
  }, []);

  // Update person
  const handleUpdatePerson = useCallback((updatedPerson) => {
    setPersons((prev) =>
      prev.map((p) => (p.id === updatedPerson.id ? updatedPerson : p))
    );
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Outlet
        context={{
          persons,
          setPersons,
          handleUpdatePerson,
          handleAddEmployee,
        }}
      />
      <Footer />
    </>
  );
};

export default Root;
