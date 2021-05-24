import PropTypes from 'prop-types';

const NavLogo = ({ title }) => {
    return (
        <h1 className='text-3xl font-medium text-white'>{title}</h1>
    );
}

NavLogo.propTypes = {
    title: PropTypes.string
}
export default NavLogo;