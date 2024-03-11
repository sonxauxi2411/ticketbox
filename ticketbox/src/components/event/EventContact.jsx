import eventIcon from "../../assets/icon/event-icon01.png";
import locationIcon from "../../assets/icon/event-icon02.png";
// import contactIcon from "../../assets/icon/event-icon03.png";
import PropTypes from "prop-types";

const EventContact = ({ org, location }) => {
  return (
    <div className="contact-side">
      <div className="item">
        <div className="item-thumb">
          <img src={eventIcon} alt="icon" />
        </div>
        <div className="item-content">
          <span>{org?.display_name}</span>
        </div>
      </div>
      <div className="item">
        <div className="item-thumb">
          <img src={locationIcon} alt="icon" />
        </div>
        <div className="item-content">
          {/* <span>{location?.display_name}</span> */}
          <span>{location?.adress}, {location?.city} </span>
         
        </div>
      </div>
     
    </div>
  );
};
EventContact.propTypes = {
  org: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default EventContact;
