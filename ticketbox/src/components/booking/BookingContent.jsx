import { IoMdPerson } from "react-icons/io";
import FormGroup from "../auth/FormGroup";
import ButtonCustom from "../common/ButtonCustom";
import BookingTicket from "./BookingTicket";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
const BookingContent = ({ event }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <div>
        {/* card not login */}
        {!user && (
          <div className="checkout-widget d-flex justify-content-between align-items-center ">
            <div className="title-area d-flex flex-column ">
              <h5>Already a Boleto Member?</h5>
              <p>Sign in to earn points and make booking easier!</p>
            </div>
            <div className="d-flex ">
              <span className="icon-signIn">
                <IoMdPerson />
              </span>
              <span>Sign in</span>
            </div>
          </div>
        )}

        {/* card ticket */}
        <BookingTicket tickets={event?.tickets} />
      </div>
    </div>
  );
};

export default BookingContent;
