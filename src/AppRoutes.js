import { useRoutes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ViewPage from "./pages/ViewPage";

const AppRoutes = () => {
  const element = useRoutes([

    {
      path: "",
      element: <SideBar />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "search",
          element: <SearchPage />
        },
        {
          path: "view",
          element: <ViewPage />
        },
      
      ],
    },

    
    {
      path: "search",
      element: <SearchPage />
    },
    {
      path: "view",
      element: <ViewPage />
    },
    {
      path: "test",
      element: <SideBar />
    },


  ]);

  return element;
};

export default AppRoutes;
