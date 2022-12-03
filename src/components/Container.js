import "./Container.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown, FaSave } from "react-icons/fa";
// import { AiFillBulb } from 'react-icons/ai';
import { SiGooglemessages } from "react-icons/si";
import { HiPencil } from "react-icons/hi";
import { AiOutlinePaperClip, AiFillBulb } from "react-icons/ai";
import { useState } from "react";
const Container = ({ asset }) => {
  const [Active, setActive] = useState(false);
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
        <p className="assetcontentheading">
          <FaAngleUp size={18} style={{ marginRight: "30px" }} />
          Thread A
        </p>
        <div style={{ display: "flex" }}>
          <div className="subthread1">
            <p className="subthreadheading">Sub Thread 1</p>
            <input
              className="subthreadinput"
              size={20}
              type={"text"}
              value="Enter text here..."
            />
          </div>
          <div className="subthread2">
            <p className="subthreadheading">Sub Interpretation 1</p>
            <input
              className="subthreadinput"
              size={20}
              type={"text"}
              value="Enter text here..."
            />
          </div>
        </div>
        <AiFillBulb
          style={{ marginLeft: "30%", marginTop: "5px", marginRight: "10px" }}
        />
        <SiGooglemessages />
        <select
          style={{ marginLeft: "5px", height: "30px", borderRadius: "5px" }}
        >
          <option value="select1">Select Category</option>
        </select>
        <select
          style={{ marginLeft: "5px", height: "30px", borderRadius: "5px" }}
        >
          <option value="select2">Select Process</option>
        </select>
        <br />
        <button className="threadbutton">+ Sub thread</button>
        <br />
        <div className="subthread3">
          <p className="subthreadheading1">Summary for thread A</p>
          <input
            className="subthreadinput1"
            size={20}
            type={"text"}
            value="Enter text here..."
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
        <button className="threadbutton1">+ New thread</button>
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
          value={"Reflect as per given guidelines"}
        >
          Reflect as per given guidelines
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
        <p className="assetcontentheading">
          <FaAngleUp size={18} style={{ marginRight: "30px" }} />
          Introduction
              </p>
              <input className="th7i1" type={'text'} value={"Enter introduction"} />
              <p className="assetcontentheading">
          <FaAngleUp size={18} style={{ marginRight: "30px" }} />
          Thread A
              </p>
              <p className="th7sh1">Example 1</p>
              <input className="th7i2" type={'text'} value={"Enter Text Here"} />
              <br></br><button style={{margin:"30px 10px 10px 120px"}} className="threadbutton">+ Example</button>
              <p className="th7sh1">Argument for Thread A</p>
              <input className="th7i2" type={'text'} value={"Enter Text Here"} />
              <button style={{marginLeft:"61%"}} className="threadbutton1">+ New thread</button>
              <p className="assetcontentheading">
          <FaAngleUp size={18} style={{ marginRight: "30px" }} />
          Conclusion
              </p>
              <input className="th7i1" type={'text'} value={"Enter introduction"} />
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
