import { useEffect, useState } from "react";
import ticketApi from "../../../api/modules/ticket.api";
import Action from "../../action/Action";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import ModalForm from "../../layout/ModalForm";
import CreateTicket from "./CreateTicket";
const Ticket = () => {
  const [listTicket, setListTicket] = useState([]);
  const [checks, setChecks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await ticketApi.allTicket();
        // console.log(response);
        setListTicket(response);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchTicket();
  }, []);

  console.log(listTicket);
  return (
    <div className="section-content">
      <div className="title-content d-flex justify-content-between align-items-center">
        <div className="">
          <h3>List Event </h3>
        </div>
        <Action checks={checks} open={() => setShow(true)} />
      </div>

      <div className="section-table">
        <table className="w-100">
          <tr className="table-title">
            <th>
              <span className="check-custom">
                {checks.length == listTicket.length ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
            </th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>desc</th>
            <th>Event</th>
            <th>Action</th>
          </tr>
          {listTicket.map((e) => {
            return (
              <tr key={e._id}>
                <td>
                  <span
                    className="check-custom"
                    // onClick={() => handlerchecked(org._id)}
                  >
                    {checks.includes(e._id) ? (
                      <MdCheckBox />
                    ) : (
                      <MdCheckBoxOutlineBlank />
                    )}
                  </span>
                </td>
                <td>{e.display_name}</td>
                <td>{e.price}</td>
                <td>{e.quantity}</td>
                <td>{e.description}</td>
                <td>{e.event.name}</td>
                <td>
                  <Action
                    open={() => setShow(true)}
                    checks={checks}
                    id={e._id}
             
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <Modal className="" centered show={show} onHide={() => setShow(false)}>
        <ModalForm title="Event" close={() => setShow(false)}>
          <CreateTicket close={() => setShow(false)} />
        </ModalForm>
      </Modal>
    </div>
  );
};

export default Ticket;
