import CardWrapper from "../../atomics/cardComic/CardWrapper";
import ListCategory from "../../atomics/cardComic/ListCategory";
import ListInfo from "../../atomics/cardComic/ListInfo";
import Title from "../../atomics/cardComic/Title";

const CardComicSmall = ({ title, thumbnail, linkDetail, listCategory, listInfo }) => {
    return(
        <CardWrapper imageURL={thumbnail}>
            <div className='bg-black-transparent px-8 pb-8 pt-64'>
                <div className='text-white'>
                    <Title title={title} href={linkDetail} classes='mb-2 text-xl' />
                    <ListCategory list={listCategory} />
                    <ListInfo list={listInfo} />
                </div>
            </div>
        </CardWrapper>
    )
}

export default CardComicSmall;