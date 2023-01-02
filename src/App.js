import './App.css';
import stuff from './20220708_010828.jpg';
import { useEffect, useState } from 'react';


const App = () => {
  const [search1,setSearch] = useState("");
  const [slist,setList] = useState([]);
  const [historyList, setHistory] = useState([]);
  console.log("Miserable trash: "+ historyList);
  console.log("Stuff trasy: " + slist);
  useEffect(() =>{})

  var modal = document.getElementById("myModal");

  function TodoItem (item){
    var temp = item.test;
    return(
      <div className = "container">
        <text className = "textblock">{temp}</text>
        <button className = "remove"
          onClick={function(){
            //slist.splice(slist.indexOf(item.test),1);
            //console.log(slist);
            setList(slist.filter(task => task != temp));
          }}
        >
          X
        </button>
        <button className = "doneBtn"
          onClick={function(){
            console.log("Crap: " + historyList);
            console.log("Stuff: " + slist);
            setHistory(historyList.slice().concat(temp)); //["trash","crap","noInts"]
            setList(slist.filter(task => task != item.test));
          }}>
          Done
        </button>
      </div>
    );
  }

  function History(item){
    return(
      <text>{item.value}</text>
    );
  }

  //const addTask = () => {
  //  setList([...slist, {}])
  //}

  return (
  <div className = "App">
    <div className = "App-header">
      <h1>Todo list</h1>
      <div className = "container">
        <input className = "task"
          value = {search1}
          placeholder = "Add a task!"
          onChange = {(e)=>setSearch(e.target.value)}
        />
        {search1?.length > 0?(
          <button className = "taskButton"
            onClick = {function() {
              if (!slist.includes(search1)){
                slist.push(search1);
                
                console.log(slist);
              }else{
                console.log("already exists");
              }
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
        <button className = "clearTasks"
          onClick={function(){
            setList([]);
            }}>
              Clear
        </button>
        <button className = "historyBtn" 
        onClick={function(){
          /*Modal */
          modal.style.display = "block";
        }}>
          History
        </button>
      </div>
      <div className = "taskcontainer">
          {slist.map((item)=>
            <TodoItem test={item}/>
          )}
      </div>
    </div>
    <div id="myModal" className = "modal">
      {console.log(historyList)}
      <div className = "modalContainer">
        <span class = "closebtn" onClick={function(){
            modal.style.display = "none";
          }}>
            X
        </span>
        <h1>History</h1>
        <div className = "historyText">
          {historyList.map((item)=>
          <History value = {item}/>
        )}

        </div>
      </div>
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