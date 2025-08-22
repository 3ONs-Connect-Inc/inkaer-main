import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import LoggedInNavbar from "./LoggedInNavbar";
import GuestNavbar from "./GuestNavbar";


const Navbar = () => {
  const user = useSelector((state: RootState) => state.session.user);

  return user ? <LoggedInNavbar /> : <GuestNavbar />;
};

export default Navbar;
