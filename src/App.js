import './App.css';
import stuff from './20220708_010828.jpg';
import { useEffect, useState } from 'react';

function TodoItem (item){
  console.log("Made it");
  return(
    <div className = "container">
      <p>{item.test}</p>
      <button className = "remove">
        X
      </button>
    </div>
  );

}

const App = () => {
  const [search1,setSearch] = useState("");
  const [slist,setList] = useState([]);
  useEffect(() =>{})
  return (
  <div className = "App">
    <div className = "App-header">
      <h1>Hi</h1>
      <input className = "task"
        value = {search1}
        onChange = {(e)=>setSearch(e.target.value)}
      />
      {search1?.length > 0?(
        <button className = "taskButton"
          onClick = {function() {
          slist.push(search1);
          console.log(slist);
          setSearch("");
          }}
        >
        Add
        </button>
      ):(
        <button className = "taskButton"
          onClick = {function() {
          <p>Type something in</p>
          console.log("No text");
          }}
        >
        Add
        </button>
      )}
    </div>
    <div>
      {slist.map((item) => <TodoItem test={item}/>)}
    </div>
  </div>
  );
}

export default App;


//function App() {
  //return (

 // );
//}

//const App = () => {
  //return (

  //);
//}