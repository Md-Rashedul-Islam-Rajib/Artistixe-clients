import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-[#ECEBE8]">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;