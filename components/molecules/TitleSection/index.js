import { useRouter } from 'next/router';
import Button from "../../atomics/form/Button";

const TitleSection = ({ title, link, classes }) => {
    const router = useRouter();
    const classWrap = 'flex flex-column md:flex-row flex-nowrap items-center pb-4 title__section-wrap';

    const handleRedirectLink = e => {
        router.push(link);
    }

    return(
        <div className={classes ? `${classWrap} ${classes}` : `${classWrap}`}>
            <div className='flex w-full md:w-6/12'>
                <h4 className='text-3xl font-medium text-gray-800'>{title}</h4>
            </div>
            <div className='flex w-full md:w-6/12 justify-end'>
                <div className='text-left md:text-right'>
                    <Button text='Lihat Semua' onClick={handleRedirectLink} />
                </div>
            </div>
        </div>
    );
}

export default TitleSection;