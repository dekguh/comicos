import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const ContactList = () => {
    return(
        <ul className='list-none text-white'>
            <li className='mb-2 last:mb-0'>
                <i className='text-sm'><FontAwesomeIcon icon={faEnvelope} /></i><span className='ml-2'>kadekteguhmahesa@gmail.com</span>
            </li>
            <li className='mb-2 last:mb-0'>
                <i className='text-sm'><FontAwesomeIcon icon={faPhoneAlt} /></i><span className='ml-2'>123-456-7890</span>
            </li>
        </ul>
    )
}

export default ContactList;