import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import PersonList from "./component/Person/PersonList";
import AddEmployee from "./component/Person/AddEmployee";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <PersonList />,
      },
      {
        path: "employees",
        element: <PersonList />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "employee/add",
        element: <AddEmployee />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
