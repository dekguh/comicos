const ListInfo = ({ list }) => {
    return(
        <ul className='list-none flex flex-row flex-wrap'>
            {list && list.map((data, i) => <li key={i} className='text-white text-sm mr-3 last:mr-0'>{data}</li>)}
        </ul>
    );
}

export default ListInfo;