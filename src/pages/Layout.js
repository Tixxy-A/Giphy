import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <div className="bg-black text-white min-h-screen font-design  ">
            <div className="py-5 px-3 mx-auto">
                <Header />
                <Outlet />
            </div>

        </div>
    )
}