import Link from 'next/link';

const Title = ({ href, title, classes }) => {
    return(
        <h5 className={classes ? `text-xl font-medium ${classes}` : 'text-xl font-medium'}>
            <Link href={href}>
                <a>{title}</a>
            </Link>
        </h5>
    );
}

export default Title;