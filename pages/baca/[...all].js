import SmallList from "../../components/organism/SmallList";
import BacaContainer from '../../components/molecules/BacaContainer';
import TitleSection from "../../components/molecules/TitleSection";

const BacaManga = ({ all }) => {
    const dataSingleChaper = {
        id: 1,
        date: '',
        idManga: 1,
        chapter: 1010,
        listImage: ['/comics/one-piece/1010/dummy-image.png', '/comics/one-piece/1010/dummy-image.png', '/comics/one-piece/1010/dummy-image.png', '/comics/one-piece/1010/dummy-image.png'],
        name: 'One Piece',
        sub: 'bahasa indonesia'
    };

    return (
        <>
            <div className='container px-8 mx-auto'>
                <div className='flex flex-row flex-wrap lg:flex-nowrap'>
                    <div className='w-full flex-grow flex-shrink lg:flex-grow-0 lg:w-9/12 mr-0 md:mr-4'>
                        <div className='mt-8'>
                            <TitleSection
                                title={`${dataSingleChaper.name} ${dataSingleChaper.chapter} (${dataSingleChaper.sub})`}
                                link={`/manga/detail/${dataSingleChaper.idManga}/${dataSingleChaper.name.replace(/ /g, '-')}`}
                                classes='mb-4'
                            />
                            <BacaContainer dataSingle={dataSingleChaper.listImage} />
                        </div>
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
    )
}

export default BacaManga
