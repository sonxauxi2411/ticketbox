import { useDispatch, useSelector } from "react-redux";
import { formatCurrencyVND } from "../../utils/ticket.utils";
import ButtonCustom from "../common/ButtonCustom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import bookingApi from "../../api/modules/booking.api";
import { resetBooking } from "../../redux/booking/bookingSlice";
import { useMediaQuery } from "react-responsive";
const BookingSummery = () => {
  const tickets = useSelector((state) => state.booking.tickets);
  const total = useSelector((state) => state.booking.total);
  const user = useSelector((state) => state.auth.user);
  const params = useParams();
  const eventId = params.eventId;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isIpad =  useMediaQuery({maxWidth : 1200})
  const handleBooking = async () => {
    try {
      if (!user)
        return navigate("/login", {
          state: { next: location.pathname ? location.pathname : "/" },
        });

      const isEmpty = (tickets) => {
        return Object.keys(tickets).length === 0;
      };
      if (isEmpty(tickets)) {
        toast.error("Ticket not found", {
          autoClose: 2000,
        });
      } else {
        if (!user.fullname && !user.adress && !user.phone) {
          toast.error("Please , Update profile", {
            autoClose: 2000,
          });
        } else {
          const request = await bookingApi.createBooking({
            event_id: eventId,
            tickets,
            phone: "093121221",
            fullname: "fullname",
            total,
            ...user,
          });
          if (request) {
            toast.success("Booked Successfully, check My Ticket", {
              autoClose: 2000,
            });
            dispatch(resetBooking());
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="checkout-widget d-flex flex-column text-center">
      <div
        className=""
        style={{ borderBottom: "1px dashed #11326f", paddingBottom: "10px" }}
      >
        <h4 className="title">BOOKING SUMMERY</h4>
      </div>
      <div className="booking-summery">
        {Object.keys(tickets).map((ticketId) => {
          const ticket = tickets[ticketId];
          return (
            <div
              className="summery"
              style={{
                borderBottom: "1px dashed #11326f",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
              key={ticketId}
            >
              <div className="d-flex justify-content-between  text-start ">
                <span className="fw-bolder">{ticket.name}</span>
                <span>{ticket.quantity}</span>
              </div>
              <div className="d-flex justify-content-between  text-start">
                <span>price</span>
                <span className="">{formatCurrencyVND(ticket.price)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`total-booking d-flex ${isIpad ? 'flex-column' : ""} justify-content-between pt-4 `}>
        <span className=" fw-bolder">AMOUNT PAYABLE</span>
        <span>{formatCurrencyVND(total)}</span>
      </div>
      <div className="pt-4">
        <ButtonCustom title="proceed" onClick={handleBooking} />
      </div>
    </div>
  );
};

export default BookingSummery;
