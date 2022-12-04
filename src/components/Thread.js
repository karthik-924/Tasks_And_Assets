import './Thread.css';
import {useEffect, useState} from 'react'
import { FaAngleUp,FaAngleDown } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { AiOutlinePaperClip } from "react-icons/ai";
import SubThread from './SubThread';
const Thread = (count) => {
    const [Subthread, setSubthread] = useState(1);
    const [Active, setActive] = useState(false);
    useEffect(()=>{console.log(Subthread)},[Subthread]);
    return (
        <div className={Active ? "minimized" : ""}>
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
                console.log(subthread)
                return <SubThread key={index+1} count={index+1} />;
            })}
            <button className="threadbutton" onClick={() => { setSubthread(Subthread + 1) }}>+ Sub thread</button>
        <br />
        <div className="subthread3">
                <p className="subthreadheading1">Summary for thread {String.fromCharCode(64+count.count)}</p>
          <input
            className="subthreadinput1"
            size={20}
            type={"text"}
            placeholder="Enter text here..."
          />
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <p className="threadcredit">
            <AiOutlinePaperClip size={10} />
            Thread Credit
            <HiPencil size={20} style={{ marginLeft: "5px", color: "blue" }} />
          </p>
          <select
            style={{
              marginLeft: "150px",
              height: "30px",
              borderRadius: "5px",
              width: "150px",
              marginTop: "15px",
            }}
          >
            <option value="select2">Select Emotion</option>
          </select>
        </div>
        </div>
    );
}
export default Thread;