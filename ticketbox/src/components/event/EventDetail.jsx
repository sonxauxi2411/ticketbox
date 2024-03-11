import PropTypes from "prop-types";
import "./event.scss";
import searchBg from "../../assets/search-bg.jpg";
import ButtonCustom from "../common/ButtonCustom";
import Social from "../footer/Social";

import CountdownTimer from "./CountdownTimer";
import EventContact from "./EventContact";
import EventContent from "./EventContent";
import Footer from "../footer/Footer";

const EventDetail = ({ event }) => {
  console.log('eeeeeee', event);
  const { background } = event;


  return (
    <>
      <div
        className="event-banner-section bg-img"
        style={{ backgroundImage: `url(${background})`, height: "731.923px" }}
      ></div>
      <div className="event-book-search padding-top pt-lg-0">
        <div className="container">
          <div
            className="event-search bg-img"
            style={{ backgroundImage: `url(${searchBg})` }}
          >
            <div style={{ position: "relative", zIndex: "9" }}>
              <div className="event-search-top">
                <div className="left">
                  <h3 className="title">{event.display_name}</h3>
                </div>
                <div className="right">
                  <CountdownTimer date_time_start={event.date_time_start} />
                  <ButtonCustom title="Book tickets" small />
                </div>
              </div>
              <div className="event-search-bottom">
                <EventContact org={event.org} location={event.location} />
                
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
        <EventContent tickets={event.tickets} org={event.org} desc={event.description}/>
      <Footer />
    </>
  );
};

EventDetail.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventDetail;
