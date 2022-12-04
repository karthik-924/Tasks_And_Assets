import "./Container.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown, FaSave } from "react-icons/fa";
// import { AiFillBulb } from 'react-icons/ai';
// import { SiGooglemessages } from "react-icons/si";
import { useState,useEffect } from "react";
import Thread from "./Thread";
import Thread2 from "./Thread2";
const Container = ({ asset }) => {
  const [Active, setActive] = useState(false);
  const [Athread, setAthread] = useState(1);
  const [Tactive, setTactive] = useState(true);
  const [T1active, setT1active] = useState(true);
  const [Bthread, setBthread] = useState(1);
  useEffect(()=>{console.log(Athread)},[Athread,Bthread]);
  console.log(asset);
  const Change = () => {
    console.log(Active);
    setActive(!Active);
  };
  if (asset.display_asset_reflection != null)
    return (
      <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        <p className="assetcontent">{asset.display_asset_reflection}</p>
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
    );
  else if (asset.asset_content === "tb")
    return (
      <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        {[...Array(Athread)].map((thread, index)=>{
                return <Thread key={index+1} count={index+1} />;
            })}
        <button className="threadbutton1" onClick={()=>setAthread(Athread+1)}>+ New thread</button>
        <br />
        <FaSave size={25} style={{ marginLeft: "80%", marginTop: "10px" }} />
        <hr className="lighthr" />
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
    );
  else if (asset.asset_content === "reflection")
    return (
      <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        <textarea
          className="textarea"
          placeholder={"Reflect as per given guidelines"}
        >
        </textarea>
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
    );
  else if (asset.display_asset_docs !== null && asset.display_asset_docs !== "")
    return (
      <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        <iframe
          className="iframe"
          title="wiki"
          src="https://docs.media.bitpipe.com/io_10x/io_102267/item_725049/Big-Data-in-Big-Companies.pdf"
        ></iframe>
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
    );
  else if (asset.display_asset_image !== null && asset.display_asset_image !== "")
    return (
      <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        <img
          className="image"
          title="wiki"
                src={asset.display_asset_image}
                alt="imageof"
        ></img>
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
      );
  else if (asset.asset_content === "eb")
      return (
        <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
          <p className="assetcontainerheading">{asset.asset_title}</p>
          <div className={Tactive?"":"minimized"}>
        <p className="assetcontentheading">
        {Tactive ? (
          <FaAngleDown
            onClick={()=>setTactive(!Tactive)} size={18} style={{ marginRight: "30px" }}
          />
        ) : (
          <FaAngleUp
            onClick={()=>setTactive(!Tactive)} size={18} style={{ marginRight: "30px" }}
          />
        )}
          Introduction
              </p>
            <input className="th7i1" type={'text'} placeholder={"Enter introduction"} />
          </div>
          <div >
            {[...Array(Bthread)].map((thread, index)=>{
                return <Thread2 key={index+1} count={index+1} />;
            })}
          <button style={{ marginLeft: "61%" }} className="threadbutton1" onClick={() => setBthread(Bthread + 1)}>+ New thread</button>
          </div>
          <div className={T1active?"":"minimized"}>
            <p className="assetcontentheading"> 
            {T1active ? (
          <FaAngleDown
            onClick={()=>setT1active(!T1active)} size={18} style={{ marginRight: "30px" }}
          />
        ) : (
          <FaAngleUp
            onClick={()=>setT1active(!T1active)} size={18} style={{ marginRight: "30px" }}
          />
        )}
          Conclusion
              </p>
            <input className="th7i1" type={'text'} placeholder={"Enter introduction"} />
            </div>
              <FaSave size={25} style={{ marginLeft: "75%", marginTop: "20px" }} />
              <hr className="lighthr" />
              {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
      );

  else if (asset.display_asset_url !== null && asset.display_asset_url !== "")
      return (
        <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
              <audio controls className="th8audio">
                  <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/mpeg"/>
                </audio>
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
      );
  else if (asset.display_asset_video !== null && asset.display_asset_video !== "")
      return (
        <div id={asset.asset_title} style={{marginLeft:"55%"}} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        <iframe className="th9" title="yt" src={asset.display_asset_video}></iframe>
        {Active ? (
          <FaAngleDown
            size={20}
              className="updownicon"
              style={{color:"white"}}
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
      );
  else
    return (
      <div id={asset.asset_title} className={Active ? "assetcontainer" : "assetcontainerexpand"}>
        <p className="assetcontainerheading">{asset.asset_title}</p>
        <p className="assetcontent">{asset.asset_description}</p>
        {Active ? (
          <FaAngleDown
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        ) : (
          <FaAngleUp
            size={20}
            className="updownicon"
            onClick={() => Change()}
          />
        )}
      </div>
    );
};

export default Container;
