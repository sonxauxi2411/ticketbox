import Header from "../header/Header";
import BookingContent from "./BookingContent";
import BookingSummery from "./BookingSummery";
import background from "../../assets/banner07.jpg";
import "./booking.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setGlobalLoading } from "../../redux/loading/loadingSlice";
import bookingApi from "../../api/modules/booking.api";
import Footer from "../footer/Footer";

const BookingPage = () => {
  const [event, setEvent] = useState({});
  const { eventId } = useParams();
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await bookingApi.getTicket({ event_id: eventId });

        setEvent(response);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    if (eventId) {
      dispatch(setGlobalLoading(true));
      fetchEvent();
    }
  }, [eventId]);

  // console.log(event);

  return (
    <>
      <Header />
      <div className="wrapper-booking ">
        <div
          className="bg-booking"
          style={{ backgroundImage: `url(${background})`, height: "500px" }}
        >
          <div className="booking-title">
            <h2>{event.display_name}</h2>
            <h4>
              {event.location?.adress}, 
              {event.location?.city}
            </h4>
          </div>
        </div>
       <div className="wrapper-booking-content">
       <div className="container" >
          <div className="row" style={{gap:'20px', flexWrap:"nowrap"}}>
            <div className="col-8">
              <BookingContent event={event} />
            </div>
            <div className="col-4">
              <BookingSummery />
            </div>
          </div>
        </div>
       </div>
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;
