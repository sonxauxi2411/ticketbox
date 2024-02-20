import PropTypes from 'prop-types';
import './auth.scss'

const FormGroup = ({label, type, placeholder,name, onChange, value})=>{

    return (
        <div className='form-group'>
            <label>{label}</label>
            <input onChange={onChange} value={value} type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

FormGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };


export default FormGroup