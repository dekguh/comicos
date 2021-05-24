import ArchiveList from '../components/organism/ArchiveList';
import FeaturedList from '../components/organism/FeaturedList';
import SmallList from '../components/organism/SmallList';

export default function Home() {
  return (
    <>
      <FeaturedList />
      <div className='container px-8 mx-auto'>
        <div className='flex flex-row flex-wrap lg:flex-nowrap'>
          <div className='w-full flex-grow flex-shrink lg:flex-grow-0 lg:w-9/12 mr-0 md:mr-4'>
            <ArchiveList classes='mt-8' />
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
