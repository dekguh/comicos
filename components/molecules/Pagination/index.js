import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Pagination = ({ classes, onPageChange, onPageActive, pageCount, pageRange, marginPage }) => {
    return(
        <div className={classes}>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={pageRange}
                marginPagesDisplayed={marginPage}
                containerClassName='flex flex-row flex-nowrap justify-center'
                breakClassName=''
                pageClassName='bg-white shadow py-2 px-4 m-1 text-gray-500 hover:bg-purple-400 hover:text-white duration-500 rounded'
                activeClassName='bg-purple-400 text-white'
                activeLinkClassName='text-white'
                nextClassName='hidden'
                previousClassName='hidden'
                onPageChange={onPageChange}
                onPageActive={onPageActive}
            />
        </div>
    );
}

Pagination.propTypes = {
    classes: PropTypes.string,
    onPageChange: PropTypes.func,
    onPageActive: PropTypes.func,
    pageCount: PropTypes.number,
    pageRange: PropTypes.number,
    marginPage: PropTypes.number
}

export default Pagination;