const BacaContainer = ({ dataSingle }) => {
    return (
        <div className=''>
            {dataSingle.length >= 1 && dataSingle.map((data,i) => (
                <img src={data} key={i} className='w-full mb-3' />
            ))}
        </div>
    )
}

export default BacaContainer
