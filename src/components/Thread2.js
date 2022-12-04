import './Thread2.css';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import {  useState } from 'react'

const Thread2 = (count) => {
    const [Active, setActive] = useState(true);
    const [Subthread, setSubthread] = useState(1);
    return (
        <div className={Active?"":"minimized"}>
            <p className="assetcontentheading">
            {Active ? (
          <FaAngleDown
            onClick={()=>setActive(!Active)} size={18} style={{ marginRight: "30px" }}
          />
        ) : (
          <FaAngleUp
            onClick={()=>setActive(!Active)} size={18} style={{ marginRight: "30px" }}
          />
        )}
          Thread {String.fromCharCode(64+count.count)}
              </p>
            {[...Array(Subthread)].map((subthread, index) => {
                return (<div><p className="th7sh1">Example {index+1}</p><input className="th7i2" type={'text'} placeholder={"Enter Text Here"} /></div>);
            })}
              <br></br><button style={{margin:"0px 0 10px 120px"}} className="threadbutton" onClick={()=>setSubthread(Subthread+1)}>+ Example</button>
              <p className="th7sh1">Argument for Thread {String.fromCharCode(64+count.count)}</p>
              <input className="th7i2" type={'text'} placeholder={"Enter Text Here"} />
        </div>
    );
}
export default Thread2;