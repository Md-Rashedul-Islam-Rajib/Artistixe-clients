import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllCraft from "../pages/AllCraft";
import AddCraft from "../pages/AddCraft";
import MyCraft from "../pages/MyCraft";
import PrivateRoute from "../components/PrivateRoute";
import CraftDetails from "../pages/CraftDetails";
import CategoryCard from "../components/CategoryCard";



export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => fetch('http://localhost:5000/art-homepage')

                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/register',
                    element: <Register />
                },
                {
                    path: '/allitems',
                    element: <AllCraft />,
                    loader: () => fetch('http://localhost:5000/art')
                },
                {
                    path: "/craftdetails/:id",
                    element: <PrivateRoute>
                        <CraftDetails></CraftDetails>
                    </PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/art/${params.id}`)
                },
                {
                    path: "/allcrafts/:subcategory",
                    element: <CategoryCard></CategoryCard>,
                },

                {
                    path: '/additem',
                    element: <PrivateRoute>
                        <AddCraft />
                    </PrivateRoute>
                },
                {
                    path: '/myitems', 
                    element: <PrivateRoute>
                        <MyCraft />
                    </PrivateRoute>
                }
            ]
        }
    ]
);