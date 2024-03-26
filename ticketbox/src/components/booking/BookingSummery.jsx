import { useSelector } from "react-redux";
import { formatCurrencyVND } from "../../utils/ticket.utils";
import ButtonCustom from "../common/ButtonCustom";

const BookingSummery = () => {
  const tickets = useSelector((state) => state.booking.tickets);
  const total = useSelector((state) => state.booking.total);

  console.log("tickets", tickets);
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
      <div className="total-booking d-flex justify-content-between pt-4">
        <span className=" fw-bolder">AMOUNT PAYABLE</span>
        <span>{formatCurrencyVND(total)}</span>
      </div>
      <div className="pt-4">
        <ButtonCustom title="proceed" />
      </div>
    </div>
  );
};

export default BookingSummery;
