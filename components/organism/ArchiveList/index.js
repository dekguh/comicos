import TitleSection from "../../molecules/TitleSection";
import CardComicSmall from "../../molecules/CardComicSmall";
import Pagination from "../../molecules/Pagination";

const ArchiveList = ({ classes }) => {
    const dataManga = [{
        id: 1,
        featured: true,
        popular: false,
        publish: true,
        title: 'One Piece',
        thumbnail: '/cover/one-piece.png',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Petualangan' }],
        listInfo: ['1008 bab', 'bhs indonesia', 'Eiichiro Oda', '22 Juli 1997 - sekarang', 'Shueisha', 'Shōnen']
    },{
        id: 2,
        featured: true,
        popular: false,
        publish: true,
        title: 'Gundam Seed',
        thumbnail: '/cover/gundam-seed.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Robot' }],
        listInfo: ['786 bab', 'bhs indonesia']
    },{
        id: 3,
        featured: true,
        popular: false,
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
    },{
        id: 5,
        featured: false,
        popular: false,
        publish: true,
        title: 'Digimon Adventure',
        thumbnail: '/cover/digimon-adventure.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }],
        listInfo: ['121 bab', 'bhs indonesia']
    },{
        id: 6,
        featured: false,
        popular: false,
        publish: true,
        title: 'Adachi To Shimamura',
        thumbnail: '/cover/adachi-to-shimamura.jpg',
        listCategory: [{ link: '#', text: 'Aksi' }],
        listInfo: ['121 bab', 'bhs indonesia']
    }];

    return (
        <>
            <div className={classes}>
                <TitleSection
                    title='Manga Terbaru'
                    link='/manga'
                    classes='mb-4'
                />

                <div className='flex flex-row flex-wrap'>
                    {dataManga.map((data, i) => (
                        <div key={i} className='w-full md:w-2/4 lg:w-1/4 px-2 pb-4'>
                            <CardComicSmall
                                thumbnail={data.thumbnail}
                                title={data.title}
                                linkDetail={`/manga/detail/${data.id}/${data.title.replace(/ /g, '-')}`}
                                listCategory={data.listCategory}
                                listInfo={data.listInfo}
                            />
                        </div>
                    ))}
                </div>

                <Pagination
                    classes='mt-4'
                    pageCount={10}
                    pageRange={2}
                    marginPage={3}
                />
            </div>
        </>
    )
}

export default ArchiveList
