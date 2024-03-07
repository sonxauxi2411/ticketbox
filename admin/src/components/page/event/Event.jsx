import { useEffect, useState } from "react";
import eventApi from "../../../api/modules/event.api";
import Action from "../../action/Action";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import ModalForm from "../../layout/ModalForm";
import CreateEvent from "./CreateEvent";

const Event = () => {
  const [listEvent, setListEvent] = useState([]);
  const [checks, setChecks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await eventApi.allEvent();
        // console.log(response);
        setListEvent(response);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }, []);

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
                {checks.length == listEvent.length ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
            </th>
            <th>name</th>
            <th>IMG</th>
            <th>ORG</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
          {listEvent.map((e) => {
            const start_date = new Date(e.end_date_time).toLocaleDateString(
              "en-GB"
            );
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
                <td>
                  <img src={e.background} alt={e.display_name} width="200px" />
                </td>
                <td>{e.org.display_name}</td>
                <td>
                  <span>{start_date}</span>
                </td>
                <td> <Action open={() => setShow(true)} checks={checks} id={e._id} /></td>
              </tr>
            );
          })}
        </table>
      </div>
      <Modal className=""  fullscreen show={show} onHide={() => setShow(false)}>
        <ModalForm title="Event" close={() => setShow(false)}>
          <CreateEvent close={() => setShow(false)} />
        </ModalForm>
      </Modal>
    </div>
  );
};

export default Event;
