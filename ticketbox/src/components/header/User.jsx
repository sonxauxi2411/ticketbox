import avatar from "../../assets/icon/avatar.png";
import Image from "react-bootstrap/Image";
import Cookies from "js-cookie";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
const User = () => {
  const user = useSelector((state) => state.auth.user);

  return (

        <div className="header-user">
                
    <Dropdown>
      <Dropdown.Toggle>
        
          <Image src={avatar} roundedCircle width="20%" />
          <span className="px-2">{user.username}</span>
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/my-ticket">My tickets</Dropdown.Item>
        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
  );
};

export default User;
