import { logoDark } from "@/assets";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logoDark}
          className="h-8 sm:h-8  w-auto"
          alt="Inkaer"
          loading="lazy"
        />
      </Link>
    </>
  );
};

export default Logo;
