import { useState } from "react";
import data from "./components/countryData.json";
import "./App.css"

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
   const handleSearch=()=>{
    setTimeout( ()=>{
    
      document.getElementById('top-search').innerHTML = `Searching for ${value}...`
     }, 1000)
   }

  const keyPress = (e)=>{
    if(e.key==="Escape"){
      console.log(e.key)
      document.getElementById("dropdown").style.display = "none";
    }
    else{
      document.getElementById("dropdown").style.display = "block";
    }
  }

  return (
    <div className="App">
      <h1 id="top-search">Search</h1>
      <div>
        <div>
          <input type="text" value={value} onChange={handleChange} onKeyDown={keyPress} />
          <button onClick={handleSearch}>Search </button>
        </div>
        <div id="dropdown">
          {data.filter((e) => {
              return (
                value &&
                e.name.startsWith(value)  &&
                e.name !== value
              );
            })
            .map((i) => {
              return (
              <div onClick={() => setValue(i.name)}>
                {i.name}
              </div>
            )})}
        </div>
      </div>
    </div>
  );
}

export default App