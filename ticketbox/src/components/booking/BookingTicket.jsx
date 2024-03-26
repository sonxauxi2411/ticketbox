import { useState, useEffect } from "react";
import { formatCurrencyVND } from "../../utils/ticket.utils";
import { useDispatch, useSelector } from "react-redux";
import { setTickets } from "../../redux/booking/bookingSlice";

const BookingTicket = ({ tickets }) => {
  const bookingTickets = useSelector((state) => state.booking.tickets);

  const dispatch = useDispatch();

  const handleIncrease = ({ ticketId, price , name}) => {
    const quantity = bookingTickets[ticketId]
      ? bookingTickets[ticketId].quantity
      : 0;
    const newQuantity = quantity + 1;

    dispatch(
      setTickets({
        ticketId,
        quantity: newQuantity,
        total: newQuantity * price,
        name ,
        price
      })
    );
  };

  const handleDecrease = ({ ticketId, price, name }) => {
    const quantity = bookingTickets[ticketId]
      ? bookingTickets[ticketId].quantity
      : 0;
    const newQuantity = Math.max(quantity - 1, 0);

    dispatch(
      setTickets({
        ticketId,
        quantity: newQuantity,
        total: newQuantity * price,
        name : name,
        price
      })
    );
  };

  console.log(bookingTickets);

  return (
    <div className="checkout-widget d-flex flex-column">
      <div className="title-area  pb-3 "  style={{
                borderBottom: "1px dashed #11326f",
                
              }}>
        <h5>Get Your Tickets</h5>
      </div>
      <div className="booking-ticket" >
        {tickets?.map((t) => {
            console.log(t)
          return (
            <div
              className="booking-ticket-item d-flex justify-content-between align-items-center py-3"
              key={t._id}
            >
              <div className="d-flex flex-column">
                <span className="fw-bolder">{t.display_name}</span>
                <span className="">{formatCurrencyVND(t.price)}</span>
              </div>
              <div>
                <div className="d-flex " style={{ gap: "10px" }}>
                  <div className="cart-plus-minus">
                    <div className="dec qtybutton">-</div>
                    <div
                      className="dec qtybutton"
                      onClick={() =>
                        handleDecrease({ ticketId: t._id, price: t.price, name:t.display_name })
                      }
                    >
                      -
                    </div>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      name="qtybutton"
                      value={
                        bookingTickets[t._id]
                          ? bookingTickets[t._id].quantity
                          : 0
                      }
                      readOnly
                    />
                    <div className="inc qtybutton">+</div>
                    <div
                      className="inc qtybutton"
                      onClick={() =>
                        handleIncrease({ ticketId: t._id, price: t.price, name:t.display_name  })
                      }
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingTicket;
