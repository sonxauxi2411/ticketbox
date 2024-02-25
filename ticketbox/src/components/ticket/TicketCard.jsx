import "./ticket.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import iconTicket from "../../assets/images/ticket01.png";
import { formatCurrencyVND } from "../../utils/ticket.utils";
import PropTypes from "prop-types";

const TicketCard = ({tickets}) => {
    console.log(tickets)
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        modules={[Navigation, Autoplay]}
        className="silde-ticket w-100 h-100"
      >
       {tickets?.map(ticket=>{
         return (

            <SwiperSlide key={ticket._id}>
         <div className="ticket--item">
           <div className="ticket-thumb">
             <img src={iconTicket} alt="ticket" />
           </div>
           <div className="ticket-content">
             <span className="ticket-title">{ticket.display_name}</span>
             <h2 className="amount">{formatCurrencyVND(ticket.price)}</h2>
           </div>
         </div>
       </SwiperSlide>
         )
       })}
      </Swiper>
    </div>
  );
};

TicketCard.propTypes = {
    tickets: PropTypes.array.isRequired,
  };
export default TicketCard;
