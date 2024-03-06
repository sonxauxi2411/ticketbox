import { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, []);
  return (
    <div className="row">
      <div className="col-2">
        <Navbar />
      </div>
      <div className="col">
        <div className="main-container">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
