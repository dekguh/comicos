import ListCategory from '../../atomics/cardComic/ListCategory';
import ListInfo from '../../atomics/cardList/ListInfo';
import Title from '../../atomics/cardList/Title';

const CardList = ({ title, thumbnail, linkDetail, listCategory, listInfo }) => {
    return(
        <div className='flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink'>
                <img src={thumbnail} className='object-cover w-24 h-28' />
            </div>
            <div className='flex-grow flex-shrink pl-3'>
                <Title href={linkDetail} title={title} classes='mb-2' />
                <ListCategory list={listCategory} />
                <ListInfo list={listInfo} />
            </div>
        </div>
    )
}

export default CardList;