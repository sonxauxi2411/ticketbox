import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();

  const [name, setName] = useState(
    location?.state?.name ? location.state?.name : ""
  );
  useEffect(() => {
    setName(location?.state?.name);
  }, [location]);

  return (
    <div className="header-main">
      <div className="header-title-page">
        <span>Pages / {name}</span>
        <h2>{name}</h2>
      </div>
      <div className="header-user"></div>
    </div>
  );
};

export default Header;
