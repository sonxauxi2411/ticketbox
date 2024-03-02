import "./actions.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import orgApi from "../../api/modules/org.api";

const Action = ({ checks , open}) => {
  const navigate = useNavigate();
  const location = useLocation();


  const handlerDelete = async () => {
    try {
      await orgApi.deleteOrg({ids: checks})
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="actions">
      <button className="btn btn-danger"><FaTrashAlt /></button>
      <button className="btn btn-primary" onClick={open}>Create</button>
    </div>
  );
};

Action.propTypes = {
  checks: PropTypes.Array,
  open: PropTypes.func,
};

export default Action;
