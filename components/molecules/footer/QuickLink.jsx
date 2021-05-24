import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const QuickLink = ({ list, typeList }) => {
    return(
        <ul className='list-none'>
            {list && list.map((data, i) => <li key={i} className='mb-2 last:mb-0'>
                <a href={(typeList == 'kategori') ? `/manga/kategori/${data.id}` : data.url } className='text-white'>
                    <i className='text-sm'><FontAwesomeIcon icon={faChevronRight} /></i><span className='ml-1'>{data.nama}</span>
                </a>
            </li>)}
        </ul>
    )
}

export default QuickLink;