import { Footer } from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
