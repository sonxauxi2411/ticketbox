import Dropdown from "react-bootstrap/Dropdown";
import "./actions.scss";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import orgApi from "../../api/modules/org.api";

const Action = ({ checks }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hanlderCreate = () => {
    navigate("create", { state: { name: `Create ${location.state.name}` } });
  };
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
      <Dropdown>
        <Dropdown.Toggle className="btn-actions">
          <BsThreeDots />
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu-action">
          <div className="d-flex flex-column">
            <button className="btn" onClick={hanlderCreate}>
              Create
            </button>
            <button className="btn" onClick={handlerDelete}>
              Delete
            </button>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

Action.propTypes = {
  checks: PropTypes.Array,
};

export default Action;
