import Header from "../header/Header";
import banner from "../../assets/banner01.jpg";
import "./home.scss";
import { useEffect, useState } from "react";
import Search from "../search/Search";
import CategoryTicket from "./CategoryTicket";
import Footer from "../footer/Footer";

const Home = () => {
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText((prevShowText) => !prevShowText);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <Header />
      <div className="banner-section">
        <div
          className="home-bg"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className="container">
          <div className="banner-content">
            <h1 className="title">
              <span className="d-block pb-3">book your</span>
              <div>
                <span> tickets for</span>
                <span
                  className={`animated-span ${
                    showText ? "expanded" : "collapsed"
                  }`}
                >
                  {/* <b className=""> {showText ? " Event" : " Movie"}</b> */}
                  <b>Movie</b>
                </span>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <Search />
      <CategoryTicket />
      <Footer />
    </div>
  );
};

export default Home;
