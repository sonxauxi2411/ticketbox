import "./header.scss";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import ButtonCustom from "../common/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import User from "./User";
import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";


const Header = ({ event }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isIpadMin = useMediaQuery({ maxWidth: 992 });
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlerLogin = () => {
    // console.log(location.pathname)
    navigate("/login", {
      state: { next: location.pathname ? location.pathname : "/" },
    });
  };

  const user = Cookies.get("user");

  return (
    <div
      className={`header-seaction ${isScrolled ? "header-active" : ""}`}
      // style={{background: `${event ? '#0a1e5e' : ''}`}}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between ">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          {!isIpadMin ? (
            <div className="d-flex justify-content-center align-items-center">
              <div className="header-link">
                <Link to="/event">Events</Link>
              </div>
              <div className="header-link">
                <Link>Contact</Link>
              </div>
              <div className="ps-3">
                {user ? (
                  <User />
                ) : (
                  <ButtonCustom title="Join us" onClick={handlerLogin} />
                )}
              </div>
            </div>
          ) : (
            <div>
              <button
                className="btn-hamburger"
                onClick={() => setShowMenu(!showMenu)}
              >
                {!showMenu ? <RxHamburgerMenu /> : <VscChromeClose />}
              </button>
              {showMenu && (
                <div className="header-hamburger">
                  <div className="menu ">
                    <div className="p-3">
                      <div className="header-link">
                        <Link to="/event">Events</Link>
                      </div>
                      <div className="header-link">
                        <Link>Contact</Link>
                      </div>

                      {user ? (
                        <User />
                      ) : (
                        <ButtonCustom title="Join us" onClick={handlerLogin} />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
