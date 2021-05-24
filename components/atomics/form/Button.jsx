import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            className={props.classes ? `button__custom ${props.classes}` : 'button__custom'}
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

Button.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
}

Button.defaultProps = {
    text: 'Button',
    text: 'submit'
}

export default Button
