import PropTypes from "prop-types";
import "./auth.scss";

const FormGroup = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
  form,
}) => {
  return (
    <div className="form-group">
      <label>
        <span>{label}</span>
        {form?.touched[name] && form.errors[name] && (
          <span className="text-error">{form.errors[name]}</span>
        )}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormGroup;
