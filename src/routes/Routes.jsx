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
import SubcategoryCardList from "../pages/SubcategoryCardList";



export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => fetch('https://assignment-10-server-rho-one.vercel.app/art-homepage')

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
                    loader: () => fetch('https://assignment-10-server-rho-one.vercel.app/art')
                },
                {
                    path: "/craftdetails/:id",
                    element: <PrivateRoute>
                        <CraftDetails></CraftDetails>
                    </PrivateRoute>,
                    loader: ({params}) => fetch(`https://assignment-10-server-rho-one.vercel.app/art/${params.id}`)
                },
                {
                    path: "/allcrafts/:subcategory",
                    element: <SubcategoryCardList></SubcategoryCardList>,
                    loader: ({params}) => fetch(`https://assignment-10-server-rho-one.vercel.app/allcrafts/${params.subcategory}`)
                },

                {
                    path: '/additem',
                    element: <PrivateRoute>
                        <AddCraft />
                    </PrivateRoute>
                },
                {
                    path: '/myitems/:email', 
                    element: <PrivateRoute>
                        <MyCraft />
                    </PrivateRoute>,
                    loader: ({params}) => fetch(`https://assignment-10-server-rho-one.vercel.app/myitems/${params.email}`)
                }
            ]
        }
    ]
);