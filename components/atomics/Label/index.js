import Link from "next/link"

const Label = ({ href, text }) => {
    return(
        <Link href={href}>
            <a className='inline-block py-1 px-3 bg-purple-400 hover:bg-purple-500 text-white rounded-2xl duration-500'>{text}</a>
        </Link>
    )
}

export default Label;