import PropTypes from "prop-types";
import "./auth.scss";

const FormGroup = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
  errorMessage,
  onBlur,
  onFocus,
  search
}) => {
    console.log(errorMessage)
  return (
    <div className="form-group">
      <div className="d-flex" style={{gap:'20px'}}>
        <label>{label}</label>
        <span>
     
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
        </span>
      </div>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
      className={`${search ? 'search' : ""}`}
      />
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormGroup;
