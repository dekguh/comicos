import ContactList from "../../molecules/footer/ContactList";
import QuickLink from "../../molecules/footer/QuickLink";

const Footer = ({ classes }) => {
    const dataCategory = [{
        id: 1,
        nama: 'Petualangan'
    },{
        id: 2,
        nama: 'Aksi'
    },{
        id: 3,
        nama: 'Romantis'
    }];

    const dataQuickLink = [{
        id: 1,
        url: '/pages/1/iklan',
        nama: 'Pasang iklan'
    },{
        id: 2,
        url: '/pages/2/kerja-sama',
        nama: 'Kerja sama'
    },{
        id: 3,
        url: '/pages/3/lowongan-kerja',
        nama: 'Lowongan kerja'
    }];

    return(
        <div className={classes}>
            <div className='bg-purple-400 pt-12'>
                <div className='container mx-auto px-8'>
                    <div className='flex flex-row flex-wrap lg:flex-nowrap'>
                        <div className='flex-shrink flex-grow w-full md:w-6/12 lg:w-4/12 md:flex-grow-0 mb-9 pl-0 lg:pl-4'>
                            <h4 className='text-white font-medium text-2xl mb-2'>Tentang Kami</h4>
                            <p className='text-white'>
                                kami merupakan platform untuk membaca manga secara online dan menyedia manga berbahasa indonesia
                            </p>
                        </div>

                        <div className='flex-shrink flex-grow w-full md:w-6/12 lg:w-2/12 md:flex-grow-0 mb-9 px-0 lg:px-4'>
                            <h4 className='text-white font-medium text-2xl mb-2'>Kategori</h4>
                            <QuickLink list={dataCategory} typeList='kategori' />
                        </div>

                        <div className='flex-shrink flex-grow w-full md:w-6/12 lg:w-2/12 md:flex-grow-0 mb-9 px-0 lg:px-4'>
                            <h4 className='text-white font-medium text-2xl mb-2'>Pintasan Link</h4>
                            <QuickLink list={dataQuickLink} />
                        </div>

                        <div className='flex-shrink flex-grow w-full md:w-6/12 lg:w-4/12 md:flex-grow-0 mb-9 pl-0 lg:pl-4'>
                            <h4 className='text-white font-medium text-2xl mb-2'>Kontak Kami</h4>
                            <ContactList />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-purple-500 py-4'>
                <div className='container mx-auto text-white text-center px-8'>
                    copyright 2020. template by I Kadek Teguh Mahesa
                </div>
            </div>
        </div>
    );
}

export default Footer;