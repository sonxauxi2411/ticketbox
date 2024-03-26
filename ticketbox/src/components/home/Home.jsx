import Header from "../header/Header";
import banner from "../../assets/banner01.jpg";
import "./home.scss";
import { useEffect, useState, useRef } from "react";
import Search from "../search/Search";
import CategoryTicket from "./CategoryTicket";
import Footer from "../footer/Footer";

const Home = () => {
  const [showText, setShowText] = useState(true);
  const category = ["Sport ", "Event ", "Sport", "Stage"];
  const [cateNumber, setCateNumber] = useState(0);
  const categoryRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (categoryRef.current) {
        const widthElement = categoryRef.current.clientWidth;
        if (widthElement <= 1) {
          setShowText((prevShowText) => !prevShowText);
          setCateNumber((prev) =>
            prev === category.length - 1 ? 0 : prev + 1
          );
        } else {
          setTimeout(() => {
            setShowText((prevShowText) => !prevShowText);
          }, 500);
        }
      }
    }, 1600);

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
              <div >
                <span style={{position:'relative', bottom:'12px', right:'18px'}}> tickets for</span>
                <span
                  ref={categoryRef}
                  className={`animated-span ${
                    showText ? "expanded" : "collapsed"
                  }`}
                >
                  {/* <b className=""> {showText ? " Event" : " Movie"}</b> */}
                  <b>{category[cateNumber]}</b>
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
