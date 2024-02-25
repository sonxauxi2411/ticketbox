import { Link } from "react-router-dom";
import { FaFacebookF ,FaTwitter } from "react-icons/fa";
import "./footer.scss";

const Social = ()=>{

    return (
         
        <ul className="social-icons">
        <li>
            <Link >
                <FaFacebookF />    
            </Link>
        </li>
        <li><Link><FaTwitter /></Link></li>
  </ul>
    )
}

export default Social;