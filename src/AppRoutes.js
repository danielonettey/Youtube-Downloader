import { useRoutes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PortofolioPage from "./pages/PortofolioPage";
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
          path: "search/:searchTerm",
          element: <SearchPage />
        },
        {
          path: "view/:videoId",
          element: <ViewPage />
        },
        {
          path: "view/:searchTerm/:videoId",
          element: <ViewPage />
        },
      
      ],
    },

    
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "view",
      element: <ViewPage />
    },
    {
      path: "test",
      element: <Dashboard />
    },
    {
      path: "port",
      element: <PortofolioPage />
    }


  ]);

  return element;
};

export default AppRoutes;
