import './Main.css';
import Container from "./Container";

const Main = (Assets) => {
    
    return (
        <div className='mainbody'>
            <h4 className='mainheading'><span><p className='headingcontent'>You Are Taking Challenges Of New Project</p></span></h4>
            <center><h4 className='taskname'>Demo Task</h4></center>
            <div className="assetscontainer">
            {/* {console.log(Assets)} */}
                {Assets.Assets.map((asset) => <Container key={asset['asset_id']} asset={asset}/>)}
            </div>
        </div>
    );
}
export default Main