import { useEffect, useState } from "react";
import Header from "../header/Header";
import "./event.scss";
import eventApi from "../../api/modules/event.api";
import { useParams } from "react-router-dom";
import EventDetail from "./EventDetail";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoading } from "../../redux/loading/loadingSlice";

const Event = () => {
  const [event, setEvent] = useState({});
  const { eventId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await eventApi.getEvent({ event_id: eventId });

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

  return (
    <div>
      <Header title={event.display_name} />
      <EventDetail event={event} />
    </div>
  );
};

export default Event;
