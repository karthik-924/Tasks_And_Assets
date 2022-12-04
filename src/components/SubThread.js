import './SubThread.css';
import { AiFillBulb } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
const SubThread = (count) => {
    return (
        <div>
            <div style={{ display: "flex" }}>
          <div className="subthread1">
                    <p className="subthreadheading">Sub Thread {count.count}</p>
            <input
              className="subthreadinput"
              size={20}
              type={"text"}
              placeholder="Enter text here..."
            />
          </div>
          <div className="subthread2">
                    <p className="subthreadheading">Sub Interpretation {count.count}</p>
            <input
              className="subthreadinput"
              size={20}
              type={"text"}
              placeholder="Enter text here..."
            />
          </div>
        </div>
        <AiFillBulb
          style={{ marginLeft: "30%", marginTop: "5px", marginRight: "10px" }}
        />
        <SiGooglemessages />
        <select
          style={{ marginLeft: "5px", height: "30px", borderRadius: "5px", marginTop:"15px"}}
        >
          <option value="select1">Select Category</option>
        </select>
        <select
          style={{ marginLeft: "5px", height: "30px", borderRadius: "5px" }}
        >
          <option value="select2">Select Process</option>
        </select>
        <br />
        </div>
    );
}
export default SubThread;