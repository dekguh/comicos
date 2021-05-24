import CardList from "../../molecules/CardList";
import TitleSection from "../../molecules/TitleSection";

const SmallList = ({ classes, titleSection, linkSection }) => {
    const dataManga = [{
        id: 1,
        featured: true,
        popular: true,
        publish: true,
        title: 'One Piece',
        thumbnail: '/cover/one-piece.png',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Petualangan' }],
        listInfo: ['1008 bab', 'bhs indonesia']
    },{
        id: 2,
        featured: true,
        popular: true,
        publish: true,
        title: 'Gundam Seed',
        thumbnail: '/cover/gundam-seed.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Robot' }],
        listInfo: ['786 bab', 'bhs indonesia']
    },{
        id: 3,
        featured: true,
        popular: true,
        publish: true,
        title: 'Mars Red',
        thumbnail: '/cover/mars-red.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }],
        listInfo: ['121 bab', 'bhs indonesia']
    },{
        id: 4,
        featured: true,
        popular: true,
        publish: true,
        title: 'Shaman King',
        thumbnail: '/cover/shaman-king.png',
        listCategory: [{ link: '#', text: 'Aksi' }],
        listInfo: ['121 bab', 'bhs indonesia']
    }];

    return(
        <>
            <div className={classes}>
                <TitleSection
                    title={titleSection}
                    link={linkSection}
                    classes='mb-4'
                />
                <div>
                    {dataManga.map((data, i) => (
                        data.popular && <div key={i} className='mb-3 last:mb-0'>
                            <CardList
                                thumbnail={data.thumbnail}
                                title={data.title}
                                linkDetail={`/manga/detail/${data.id}/${data.title.replace(/ /g, '-')}`}
                                listCategory={data.listCategory}
                                listInfo={data.listInfo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SmallList;