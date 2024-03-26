import { IoMdPerson } from "react-icons/io";
import FormGroup from "../auth/FormGroup";
import ButtonCustom from "../common/ButtonCustom";
import BookingTicket from "./BookingTicket";
const BookingContent = ({ event }) => {
  return (
    <div>
      <div>
        {/* card not login */}
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

        {/* card info user */}

        <div className="checkout-widget d-flex flex-column">
          <div className="title-area  w-100"  style={{
                borderBottom: "1px dashed #11326f",
                paddingBottom: "10px",
              }}>
            <h5>Share your Contact Details</h5>
          </div>
          <div>
            <div className="row" style={{ gap: "20px" }}>
              <div className="col">
                {" "}
                <FormGroup name="fullname" placeholder="Full Name" />
              </div>
              <div className="col">
                <FormGroup
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                />
              </div>
            </div>

            <div className="row" style={{ gap: "20px" }}>
              <div className="col">
                <FormGroup name="phone" placeholder="Enter your Phone" />
              </div>
              <div className="col">
                {" "}
                <ButtonCustom title="Continue" small />
              </div>
            </div>
          </div>
        </div>

        {/* card ticket */}
        <BookingTicket tickets={event?.tickets} />
      </div>
    </div>
  );
};

export default BookingContent;
