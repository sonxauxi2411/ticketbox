import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const formatNamePath = (pathname) => {
  const parts = pathname.split("/");

  const filteredParts = parts.filter((part) => part !== "");
  const formattedPathname = " / " + filteredParts.join(" / ");

  const name = parts
    .join(" ")
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
  return { pathname: formattedPathname, name: name };
};

const Header = () => {
  const location = useLocation();
  // console.log(location);
  const [name, setName] = useState("");
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    if (location.pathname == "/") {
      setName("Main Dashboard");
      setPathname(" / Main Dashboard");
    }else {
      setName(formatNamePath(location.pathname).name);
      setPathname(formatNamePath(location.pathname).pathname);
    }

  }, [location]);

  return (
    <div className="header-main">
      <div className="header-title-page">
        <span>Pages{pathname}</span>
        <h2>{name}</h2>
      </div>
      <div className="header-user"></div>
    </div>
  );
};

export default Header;
