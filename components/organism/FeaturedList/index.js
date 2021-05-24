import CardComic from "../../molecules/CardComic";
import TitleSection from "../../molecules/TitleSection";

const FeaturedList = () => {
    const dataManga = [{
        id: 1,
        featured: true,
        publish: true,
        title: 'One Piece',
        thumbnail: '/cover/one-piece.png',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Petualangan' }],
        listInfo: ['1008 bab', 'bhs indonesia']
    },{
        id: 2,
        featured: true,
        publish: true,
        title: 'Gundam Seed',
        thumbnail: '/cover/gundam-seed.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Robot' }],
        listInfo: ['786 bab', 'bhs indonesia']
    },{
        id: 3,
        featured: true,
        publish: true,
        title: 'Mars Red',
        thumbnail: '/cover/mars-red.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }],
        listInfo: ['121 bab', 'bhs indonesia']
    },{
        id: 4,
        featured: true,
        publish: true,
        title: 'Shaman King',
        thumbnail: '/cover/shaman-king.png',
        listCategory: [{ link: '#', text: 'Aksi' }],
        listInfo: ['121 bab', 'bhs indonesia']
    }];

    return(
        <div className='container mx-auto px-8 mt-8'>
            <TitleSection
                title='Featured Manga'
                link='/manga'
                classes='mb-4'
            />

            <div className='flex flex-row flex-wrap'>
                {dataManga.map((data, i) => (
                    data.featured && <div key={i} className='w-full md:w-2/4 lg:w-1/4'>
                        <CardComic
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
    );
}

export default FeaturedList;