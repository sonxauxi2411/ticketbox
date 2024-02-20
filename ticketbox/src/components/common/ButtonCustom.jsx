import { PropTypes } from "prop-types";
import "./button.scss";

const ButtonCustom = ({ title, onClick, type }) => {
  return (
    <div className="btn-custom">
      <button
        type={type}
        onClick={onClick}
      >
        <span>{title}</span>
      </button>
    </div>
  );
};

ButtonCustom.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ButtonCustom;
