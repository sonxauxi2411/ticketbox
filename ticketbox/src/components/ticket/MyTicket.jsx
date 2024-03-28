import Header from "../header/Header";
import background from "../../assets/banner07.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGlobalLoading } from "../../redux/loading/loadingSlice";
import bookingApi from "../../api/modules/booking.api";
import TicketItem from "./TicketItem";
import Footer from "../footer/Footer";

const MyTicket = () => {
  const [activeTab, setActiveTab] = useState("All");
  const user = useSelector(state=>state.auth.user)
  const [bookings , setBookings] =useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(()=>{
    if (!user) {
      return navigate('/login')
    }else {
      const fetchBookiongs = async ()=>{
        try {
          dispatch(setGlobalLoading(true))
          const res = await bookingApi.getBookingUser({user_id : user._id})
         setBookings(res)
        } catch (error) {
          console.log(error)
        }
      }

      fetchBookiongs()
    }



  },[])
  return (
    <>
      <Header />

      <div className="my-ticket-wrapper">
        <div
          className="bg-my-ticket"
          style={{ backgroundImage: `url(${background})`, height: "500px" }}
        ></div>

        <div className="container">
          <div className="my-ticket-content">
            <div>
              <h2>My Ticket</h2>
            </div>
            <ul className="tab-menu">
              <li
                className={activeTab === "All" ? "active" : ""}
                onClick={() => handleClick("All")}
              >
                All
              </li>
              <li
                className={activeTab === "Finished" ? "active" : ""}
                onClick={() => handleClick("Finished")}
              >
                Finished
              </li>
              <li
                className={activeTab === "Processing" ? "active" : ""}
                onClick={() => handleClick("Processing")}
              >
                Processing
              </li>
              <li
                className={activeTab === "Cancelled" ? "active" : ""}
                onClick={() => handleClick("Cancelled")}
              >
                Cancelled
              </li>
            </ul>
          </div>
          <div className="pt-4">
            {activeTab === "All" && <TicketItem bookings={bookings} />}
            {activeTab === "Finished" && <TicketItem bookings={bookings.filter(b=>b.status=='finished')} />}
            {activeTab === "Processing" && <TicketItem bookings={bookings.filter(b=>b.status=='pending')} />}
            {activeTab === "Cancelled" && <TicketItem bookings={bookings.filter(b=>b.status=='cancelled')} />}
          </div>
        </div>
      </div>

    <Footer />
      
    </>
  );
};

export default MyTicket;
