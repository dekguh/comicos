import Link from 'next/link';
import PropTypes from 'prop-types';

const NavItem = ({ href, text }) => {
    return(
        <li className='flex flex-grow md:flex-grow-0 py-2 md:py-0 md:px-4'>
            <Link href={href}>
                <a className='text-white hover:text-gray-200 duration-500'>{text}</a>
            </Link>
        </li>
    );
}

NavItem.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string
}

export default NavItem;