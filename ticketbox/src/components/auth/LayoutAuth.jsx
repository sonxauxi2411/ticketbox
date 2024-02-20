import PropTypes from 'prop-types';
import "./auth.scss";
import bgAccount from "../../assets/account-bg.jpg";

const LayoutAuth = ({ children }) => {
  return (
    <div
      className="wrapper-account"
      style={{ backgroundImage: `url(${bgAccount})` }}
    >
      <div className="account-area">
        <div className="account-modal">
            {children}
        </div>
      </div>
    </div>
  );
};


LayoutAuth.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default LayoutAuth;
