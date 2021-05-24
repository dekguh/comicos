import Link from "next/link";

const ListChapter = ({ dataChapterSort }) => {
    return (
        <table className='table__list-chapter w-full'>
            <thead className='bg-purple-400 text-white'>
                <tr>
                    <td className='px-3 py-2'>Judul</td>
                    <td className='px-3 py-2'>Aksi</td>
                </tr>
            </thead>
            <tbody>
                {dataChapterSort?.length >= 1 && dataChapterSort.map((data, i) => (
                    <tr className='mb-2 last"mb-0'>
                        <td className='py-2 px-3'>{`${data.name} ${data.chapter} (${data.sub})`}</td>
                        <td className='py-2 px-3'>
                            <Link href={`/baca/${data.idManga}-${data.name.replace(/ /g, '-')}/${data.chapter}`}>
                                <a className='text-gray-500'>baca</a>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListChapter
