import Button from '../../atomics/form/Button';
import NavItem from '../../atomics/Navbar/Navitem';
import PropTypes from 'prop-types';

const NavList = ({ list, onClickSearch, SearchStatus, toggleMenuStatus }) => {
    const handleToggle = e => {
        if(SearchStatus) return onClickSearch(false);
        if(!SearchStatus) return onClickSearch(true);
    }

    return (
        <ul className={toggleMenuStatus ? 'navbar__ul navbar__toggle-ctive' : 'navbar__ul navbar__toggle-inactive'}>
            {list.map((data, i) => <NavItem key={i} href={data.href} text={data.text} />)}
            <li className='flex md:flex-grow-0 pt-4 md:pt-0 md:py-0 md:px-4'>
                <Button text='cari' onClick={handleToggle} />
            </li>
        </ul>
    );
}

NavList.propTypes = {
    list: PropTypes.array,
    onClickSearch: PropTypes.func
}

NavList.defaultProps = {
    list: []
}

export default NavList;