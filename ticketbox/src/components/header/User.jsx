import avatar from "../../assets/icon/avatar.png";
import Image from "react-bootstrap/Image";
import Cookies from "js-cookie";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const User = () => {
  const user = useSelector((state) => state.auth.user);
  const isIpadMin = useMediaQuery({ maxWidth: 992 });

  const handleLogout = () => {
    Cookies.remove("jwt");
    Cookies.remove("user");
    window.location.reload();
  };
  return (
    <div>
      {!isIpadMin ? (
        <div className="header-user">
          <Dropdown>
            <Dropdown.Toggle>
              <Image src={avatar} roundedCircle width="20%" />
              <span className="px-2">{user.username}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/my-ticket">My tickets</Dropdown.Item>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <div className="header-link">
            <Link to="/my-ticket">My tickets</Link>
          </div>
          <div className="header-link">
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
