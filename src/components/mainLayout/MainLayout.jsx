import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;