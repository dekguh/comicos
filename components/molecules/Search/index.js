import Button from "../../atomics/form/Button";
import Input from "../../atomics/form/Input";
import PropTypes from 'prop-types';

const Search = ({ onClickSearch, onChangeSearch, SearchStatus }) => {
    const handleToggle = e => {
        if(SearchStatus) return onClickSearch(false);
        if(!SearchStatus) return onClickSearch(true);
    }

    return(
        <div className='bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 py-6'>
            <Button text='x' classes='absolute top-6 right-8' onClick={handleToggle} />
            <div className='container px-8 text-white search__wrap'>
                <div className=' text-center'>
                    <h3 className='text-center mb-3 font-medium text-2xl'>Temukan Manga Terbaru</h3>
                    <Input onChange={onChangeSearch} placeholder='Pencarian' classes='input__custom-search w-full bg-transparent' />
                </div>
            </div>
        </div>
    );
}

export default Search;