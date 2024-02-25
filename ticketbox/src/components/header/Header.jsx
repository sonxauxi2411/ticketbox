import "./header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ButtonCustom from "../common/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({event}) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  const handlerLogin = () => {
    navigate("/login");
  };
  return (
    <div className={`header-seaction ${isScrolled ? 'header-active' : ''}`} 
    // style={{background: `${event ? '#0a1e5e' : ''}`}}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between ">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="header-link">
              <Link>Contact</Link>
            </div>
            <div className="ps-3">
              <ButtonCustom title="Join us" onClick={handlerLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
