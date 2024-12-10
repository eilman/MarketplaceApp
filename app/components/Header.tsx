import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/images/brand_logo.png";
import "../styles/Header.css";

const Header: FC = () => {
  return (
    <div className="header-container">
      <Link to="/marketplace">
        <img src={logo} alt="Marketplace Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Header;

