import './Header.css';
import { IoHomeSharp } from 'react-icons/io5';
import { ImBinoculars } from 'react-icons/im';
import { FaTools } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs'
import {BsThreeDotsVertical} from 'react-icons/bs'
const Header = () => {
    return (
        <div className='container'>
            <div className='heading'>
                <img src='https://deepthought.education/assets/images/logo/logo.svg' alt='deepthought'></img>
            </div>
            <div className='logos'>
                <span className='logo1'><IoHomeSharp className='minlogo' size={13} /></span>
                <span className='logo2'><ImBinoculars className='minlogo' size={12} /></span>
                <span className='logo3'><FaTools className='minlogo' size={12} /></span>
                <span className='logo4'><BsFillBellFill className='minlogo' size={13} /></span>
                <span className='logo5'></span>
                <span className='logo6'><BsThreeDotsVertical className='minlogo' size={20}/></span>
            </div>
        </div>
    )
}
export default Header;