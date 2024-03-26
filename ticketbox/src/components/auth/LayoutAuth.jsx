import PropTypes from 'prop-types';
import "./auth.scss";
import bgAccount from "../../assets/account-bg.jpg";
import { useEffect } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


const LayoutAuth = ({ children }) => {
  const navigate = useNavigate()
  useEffect(()=>{
    const jwt=  Cookies.get('jwt')
    if (jwt) navigate('/')
  },[])

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
