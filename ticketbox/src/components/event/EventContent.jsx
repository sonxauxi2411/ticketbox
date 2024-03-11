import "./event.scss";
import PropTypes from "prop-types";

import TicketCard from "../ticket/TicketCard";

const EventContent = ({ tickets, org, desc }) => {
  return (
    <div className="event-content-section">
      <div className="container">
        <div className="event-cotent">
          <div className="event-about">
            <h2>About Event</h2>
            <div className="about">
            <div dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          </div>
          <div className="event-ticket">
            <h2>About Ticket</h2>
            <TicketCard tickets={tickets} />
          </div>

          <div className="event-org">
            <h2>About Organizer</h2>
            <div className="event-org-card">
              <img src={org?.img} alt="org-img" />
              <div>
                <h3>{org?.display_name}</h3>
                <p>{org?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventContent.propTypes = {
  tickets: PropTypes.array.isRequired,
  org: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
};

export default EventContent;
