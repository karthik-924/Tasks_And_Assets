import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import { React, useState,useEffect } from 'react';
const url = "https://dev.deepthought.education/assets/uploads/files/others/project.json";

function App() {
  const [Assets,setAssets]=useState([])
    const fetchAssets = async() => {
        const response = await fetch(url);
        const newAssets = await response.json();
        //console.log(newAssets)
        setAssets(newAssets['tasks'][0]['assets']);
    };
    useEffect(() => {
        fetchAssets();
        
    }, [url])
  return (
    <div className="App">
      <Header />
      <Menu Assets={Assets}/>
      <Main Assets={Assets} />
    </div>
  );
}

export default App;
