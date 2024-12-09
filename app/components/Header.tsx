import { FC } from "react";
import logo from "~/assets/images/yeni_logo_bg.png";
import "../styles/Header.css";

const Header: FC = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Marketplace Logo" className="logo" />
    </div>
  );
};

export default Header;
