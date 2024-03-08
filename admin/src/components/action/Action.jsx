import "./actions.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import orgApi from "../../api/modules/org.api";
import locationApi from "../../api/modules/location.api";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import eventApi from "../../api/modules/event.api";
import { useDispatch } from "react-redux";
import { setDataEdit } from "../../redux/editData/editSlice";


const Action = ({ checks, open, id, data }) => {
  const location = useLocation();
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);

  const handlerDelete = async () => {
    try {
      const isId = checks.length == 0 ? [id] : checks;
      if (location.pathname.includes("location")) {
        await locationApi.delete({ ids: isId });
      } else if (location.pathname.includes("organization")) {
        await orgApi.deleteOrg({ ids: isId });
      } else if (location.pathname.includes("event")) {
        await eventApi.deleteEvent({ ids: isId });
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
const handlerEdit = ()=>{
  open()
  dispatch(setDataEdit(data))
}
  return (
    <>
      {id ? (
        <div className="d-flex" style={{ gap: "10px" }}>
          <button className="btn btn-danger" onClick={handlerDelete}>
            Delete
          </button>
          <button className="btn btn-primary" onClick={handlerEdit}>Edit</button>
        </div>
      ) : (
        <div className="actions">
          <button
            className="btn btn-danger"
            disabled={checks.length == 0}
            onClick={handlerDelete}
          >
            <FaTrashAlt />
          </button>
          <button className="btn btn-primary" onClick={open}>
            Create
          </button>
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};

Action.propTypes = {
  checks: PropTypes.Array,
  open: PropTypes.func,
  id: PropTypes.String,
};

export default Action;
