import PropTypes from 'prop-types';

const CardWrapper = ({ imageURL, classes, children }) => {
    return(
        <div
            className={classes ? `bg-cover bg-no-repeat bg-center w-full ${classes}` : 'bg-cover bg-no-repeat bg-center w-full'}
            style={{ backgroundImage: `url("${imageURL}")` }}>
            {children}
        </div>
    );
}

export default CardWrapper;