const ListInformation = ({ listInfo }) => {
    return (
        <ul className='list__manga-information list-none flex flex-row flex-wrap'>
            {listInfo.length >= 1 && listInfo.map((data, i) => (
                <li className='text-gray-500 flex-grow md:flex-grow-0 flex-shrink w-full md:w-1/3 px-3'>{data}</li>
            ))}
        </ul>
    )
}

export default ListInformation
