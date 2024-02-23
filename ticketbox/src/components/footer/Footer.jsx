import "./footer.scss";
import newslaterBg from "../../assets/newslater-bg01.jpg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF ,FaTwitter } from "react-icons/fa";
import ButtonCustom from "../common/ButtonCustom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div
          className="newslater-container bg-img"
          style={{ backgroundImage: `url(${newslaterBg})` }}
        >
          <div className="newslater-wrapper">
            <div style={{position:'relative' , zIndex:'9'}}>
              <h5 className="cate">subscribe to Boleto </h5>
              <h3 className="title">to get exclusive benifits</h3>
              <form className="newslater-form">
                <input type="text" placeholder="Your Email Address" />
                {/* <button type="submit">subscribe</button> */}
                <ButtonCustom type="submit" title='subscribe'></ButtonCustom>
              </form>
              <p>We respect your privacy, so we never share your info</p>
            </div>
          </div>
        </div>

        <div className="footer-top">
        <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          
          <ul className="social-icons">
                <li>
                    <Link >
                        <FaFacebookF />    
                    </Link>
                </li>
                <li><Link><FaTwitter /></Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
                <div className="footer-bottom-area">
                    <div className="left">
                        <p>Copyright © 2020.All Rights Reserved By <a href="#0">Boleto </a></p>
                    </div>
                    <ul className="links">
                        <li>
                            <a href="#0">About</a>
                        </li>
                        <li>
                            <a href="#0">Terms Of Use</a>
                        </li>
                        <li>
                            <a href="#0">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#0">FAQ</a>
                        </li>
                        <li>
                            <a href="#0">Feedback</a>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
