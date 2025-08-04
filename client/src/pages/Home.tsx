import GuestUser from "@/components/home/GuestUser";
import LoggedInUser from "@/components/home/LoggedInUser";
import Seo from "@/components/Seo";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state: RootState) => state.session.user);

  return (
    <>
      <Seo
        title="Home"
        description="Home page."
        name="Inkaer"
        type="website"
      />
      {user ? <LoggedInUser /> : <GuestUser />}
    </>
  );
};

export default Home;
