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
  description="Inkaer helps companies hire top engineering talent faster and smarter. Discover our platform, mission, and how we're redefining tech hiring."
  name="Inkaer"
  type="website"
/>
      {user ? <LoggedInUser /> : <GuestUser />}
    </>
  );
};

export default Home;
