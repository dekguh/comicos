import InformationManga from "../../../components/molecules/mangaDetail/InformationManga";
import SmallList from "../../../components/organism/SmallList";

const MangaDetail = () => {
    const dataManga = {
        id: 1,
        featured: true,
        popular: false,
        publish: true,
        title: 'One Piece',
        thumbnail: '/cover/one-piece.png',
        listCategory: [{ link: '#', text: 'Aksi' }, { link: '#', text: 'Petualangan' }],
        listInfo: ['1008 bab', 'bhs indonesia', 'Eiichiro Oda', '22 Juli 1997 - sekarang', 'Shueisha', 'Shōnen'],
        'description': 'One Piece menceritakan tentang petualangan seorang anak bernama Monkey D. Luffy yang bercita-cita menjadi raja bajak laut dan menemukan "One Piece" setelah terinspirasi oleh Shanks.'
    };

    const dataChaper = [{
        id: 1,
        date: '',
        idManga: 1,
        chapter: 1006,
        listImage: ['', ''],
        name: 'One Piece',
        sub: 'bahasa indonesia'
    }, {
        id: 2,
        date: '',
        idManga: 1,
        chapter: 1007,
        listImage: ['', ''],
        name: 'One Piece',
        sub: 'bahasa indonesia'
    },{
        id: 3,
        date: '',
        idManga: 1,
        chapter: 1009,
        listImage: ['', ''],
        name: 'One Piece',
        sub: 'bahasa indonesia'
    },{
        id: 4,
        date: '',
        idManga: 1,
        chapter: 1010,
        listImage: ['', ''],
        name: 'One Piece',
        sub: 'bahasa indonesia'
    }];

    return(
        <>
        <div className='container px-8 mx-auto'>
            <div className='flex flex-row flex-wrap lg:flex-nowrap'>
                <div className='w-full flex-grow flex-shrink lg:flex-grow-0 lg:w-9/12 mr-0 md:mr-4'>
                    <InformationManga dataManga={dataManga} dataChapter={dataChaper} />
                </div>

                <div className='w-full flex-grow flex-shrink lg:flex-grow-0 lg:w-4/12 ml-0 md:ml-4'>
                    <SmallList
                    classes='mt-8'
                    titleSection='Popular'
                    linkSection='/manga'
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default MangaDetail;