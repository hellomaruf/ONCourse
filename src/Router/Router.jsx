import {
    createBrowserRouter,
   
} from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Overview from "../Components/Overview";
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Dashboard />,
        children: [
            {
                path: '/overview',
                element:<Overview/>
            }
        ]
    },

  ]);