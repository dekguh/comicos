import Label from "../Label";

const ListCategory = ({ list }) => {
    return(
        <ul className='list-none flex flex-row flex-wrap mb-2'>
            {list && list.map((data, i) => <li key={i} className='text-white text-sm mr-3 last:mr-0 mb-1'>
                <Label href={data.link} text={data.text} />
            </li>)}
        </ul>
    )
}

export default ListCategory;