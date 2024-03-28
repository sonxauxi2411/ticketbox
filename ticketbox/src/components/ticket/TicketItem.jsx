import a from "../../assets/icon/a.svg";
import { formatCurrencyVND } from "../../utils/ticket.utils";
import ButtonCustom from "../common/ButtonCustom";

const TicketItem = ({ bookings }) => {
  console.log(bookings);
  return (
    <div className="pt-4">
      {bookings.length !== 0 ? (
        <div className="d-flex flex-wrap" style={{ gap: "20px" }}>
          {bookings.map((b) => {
            const dateObject = new Date(b.event.start_date);
            const day = dateObject.getDate();
            const month = dateObject.getMonth() + 1;
            const year = dateObject.getFullYear();
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const hoursStr = String(hours).padStart(2, "0");
            const minutesStr = String(minutes).padStart(2, "0");
            const formattedTime = `${hoursStr}:${minutesStr}`;
            const formattedDate = `${day}/${month}/${year}`;

            return (
              <div key={b.id} className="ticket-item">
                <div className="ticket-title p-3 pt-4 ">
                  <span className=" fw-bolder">{b.event.display_name}</span>
                </div>
                <div className="">
                  <img src={b.event.img} width="100%" />
                </div>
                <div className="p-3">
                  <div>
                    {Object.keys(b.tickets).map((ticketId) => {
                      return (
                        <div
                          key={ticketId}
                          className="d-flex justify-content-between"
                        >
                          <span>{b.tickets[ticketId].name}</span>
                          <span>{b.tickets[ticketId].quantity}</span>
                          <span>
                            {formatCurrencyVND(b.tickets[ticketId].price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <table className="w-100">
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                      <tr>
                        <td>{formattedDate}</td>
                        <td>{formattedTime}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="p-3 ticket-footer">
                  <button className="noselect fw-medium">Boleto</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center">
          <img src={a} alt="not ticket" />
          <p>You don't have any ticket yet</p>
          <div>
            <ButtonCustom title="Book Now" small />
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketItem;
