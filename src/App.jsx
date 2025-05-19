// App.jsx
import { useState } from "react";
import employeeData from "./component/Person/employee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import PersonList from "./component/Person/PersonList";
import AddEmployee from "./component/Person/AddEmployee";
import About from "./pages/About";

const App = () => {
  const [employees, setEmployees] = useState(employeeData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <PersonList persons={employees} />,
        },
        {
          path: "/employees",
          element: <PersonList persons={employees} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/employee/add",
          element: (
            <AddEmployee
              onAddEmployee={(newEmployee) =>
                setEmployees((prev) => [...prev, newEmployee])
              }
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
