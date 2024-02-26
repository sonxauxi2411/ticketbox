import "./ticket.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import iconTicket from "../../assets/images/ticket01.png";
import { formatCurrencyVND } from "../../utils/ticket.utils";
import { Collapsible } from "@edx/paragon";
import PropTypes from "prop-types";

const TicketCard = ({ tickets }) => {
  console.log(tickets);
  return (
    <div className="d-flex flex-column" style={{gap:'10px'}}>
      {tickets?.map((ticket) => {
        return (
          <div key={ticket._id}>
            <Collapsible.Advanced className="collapsible-card">
              <Collapsible.Trigger className="collapsible-trigger d-flex">
                <span className="flex-grow-1 ticket-title">
                  <img src={iconTicket} alt='icon' />
                  <span>{ticket.display_name}</span>
                </span>
                <h2 className="ticket-price">{formatCurrencyVND(ticket.price)}</h2>
              </Collapsible.Trigger>

              <Collapsible.Body className="collapsible-body">
              </Collapsible.Body>
            </Collapsible.Advanced>
          </div>
        );
      })}
    </div>
  );
};

TicketCard.propTypes = {
  tickets: PropTypes.array.isRequired,
};
export default TicketCard;
