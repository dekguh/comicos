import ListChapter from "../../atomics/mangaDetail/ListChapter"
import ListInformation from "../../atomics/mangaDetail/ListInformation"

const InformationManga = ({ dataManga, dataChapter }) => {
    return (
        <div className='flex flex-row flex-wrap sm:flex-nowrap mt-8'>
            <div className='flex-grow sm:flex-grow-0 flex-shrink mb-4 sm:mb-0 mr-4 w-full sm:w-72'>
                <img src={dataManga.thumbnail} className='w-full' />
            </div>

            <div className='flex-grow sm:flex-grow flex-shrink ml-4 w-full'>
                <h3 className='text-3xl font-medium text-gray-800 mb-2'>{dataManga.title}</h3>

                <div className='mb-4'>
                    <ListInformation listInfo={dataManga.listInfo} />
                </div>

                <p className='text-gray-500'>{dataManga.description}</p>

                <div className='mt-4'>
                    <ListChapter dataChapterSort={dataChapter} />
                </div>
            </div>
        </div>
    )
}

export default InformationManga
