import { useState } from 'react';
import Button from '../../atomics/form/Button';
import NavLogo from '../../atomics/Navbar/NavLogo';
import NavList from '../../molecules/navbar/NavList';
import Search from '../../molecules/Search';

const Navbar = () => {
    const [searchActive, setSearchActive] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const menuList = [
        { href: '/', text: 'Beranda' },
        { href: '/manga', text: 'List Manga' },
        { href: '#', text: 'Kontak Kami' },

    ];

    const handleSearchToggle = (status) => {
        setSearchActive(status);
    }

    const handleToggleMenu = e => {
        if(toggleMenu) return setToggleMenu(false);
        if(!toggleMenu) return setToggleMenu(true);
    }

    return (
        <>
            <div className='bg-purple-500 py-5 relative'>
                <div className='container mx-auto px-8'>
                    <div className='flex flex-row flex-nowrap items-center'>
                        <div className='flex flex-grow-0 flex-shrink md:mr-5'>
                            <NavLogo title='Comicos.' />
                        </div>
                        <div className='flex flex-grow flex-shrink md:ml-5 justify-end'>
                            <NavList
                                list={menuList}
                                SearchStatus={searchActive}
                                onClickSearch={handleSearchToggle}
                                toggleMenuStatus={toggleMenu}
                            />

                            <Button text='Menu' classes='block md:hidden' onClick={handleToggleMenu} />
                        </div>
                    </div>
                </div>
            </div>

            {searchActive && <Search
            SearchStatus={searchActive}
            onClickSearch={handleSearchToggle} />}
        </>
    );
}

export default Navbar;