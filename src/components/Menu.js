import './Menu.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import React,{useState} from 'react';
const Menu = (Assets) => {
    const [ Header, setHeader ] = useState(false);
    const ContentDisplay = () => {
        setHeader(!Header);
        console.log(Header)
    }
    // const headings = [1, 2, 3, 4, 5,6];
    return (<div className={Header?'menubarmenu show':'menubarmenu'}>
        <div className={Header ? 'headingmenu expandedmenu commondiv' : 'headingmenu'}>{Header ? <center className='commondiv'><span className='menuheading'>Journey Board</span></center>:<></>}<GiHamburgerMenu className={Header?'iconmenu expandedicon':'iconmenu'} size={19} onClick={() => ContentDisplay()} /></div>

        <div className='content'>
            {Header ? <div id="menu"><h5 class='innerheading'>1. Name of the task goes here<hr className='innerhr'></hr></h5>{Assets.Assets.map((asset) => <li key={asset.asset_id} className='liitems'><span className='assetheading'><a className='lilinks' href={'#'+asset.asset_title}>{asset.asset_title}</a></span><hr  className='lihr'></hr></li>)}</div>:<center><p className='display'><center className='text'>1</center></p></center>}
        </div>
    </div>);
}
export default Menu;