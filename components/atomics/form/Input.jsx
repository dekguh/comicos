import PropTypes from 'prop-types';

const Input = ({ type, placeholder, onChange, classes }) => {
    return (
        <input
            type={type}
            className={classes ? `input__custom ${classes}` : 'input__custom'}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text'
}

export default Input;