import Header from "./Header";
import Navbar from "./Navbar";
import Cookie from "js-cookie";
const MainLayout = ({ children }) => {

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

export default MainLayout;
