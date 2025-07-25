import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'


function App(){
  let [initial,setInitial] = useState({todo:"",desc:""})
  let [all,setAll] = useState([])

  function inp(e){

    setInitial((prev)=>{
      return ({...prev,[e.target.name]:e.target.value} )
    })
  }

  function submit(){
    if(!initial.todo.trim() || !initial.desc.trim()){
      return
    } 
    setAll((p)=>{
      return ([...p,initial])
    })
    addLocal([...all,initial])
    setInitial({todo:"",desc:""})
  }

  function addLocal(i){
    localStorage.setItem("todos",JSON.stringify(i))
  }
  function getLocal(){
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setAll(data)
  }

  useEffect(()=>{
    getLocal();
  },[])

  function prnt(arr){
    console.log(arr);
  }

  function del(index){
    let val = [...all]
    val.splice(index,1)
    addLocal(val)
    getLocal()
    prnt(val)
  }

  return(
    <>
      <input onChange={inp} type="text" name="todo" id="todo" placeholder='Your Todo' value={initial.todo}/>
      <br /><br />
      <textarea onChange={inp} name="desc" id="desc" placeholder='Your Description' value={initial.desc}></textarea>
      <br /><br />
      <button onClick={()=>{submit()}}>Add Todo</button>
      <div>
        {
          all.map((item,i)=>{
            return (
            <div key={i+1}>
              <h3>{i+1}</h3>
              <h2>{item.todo}</h2>
              <h2>{item.desc}</h2>
              <button onClick={()=>{
                del(i)
              }}>Delete</button>
            </div>)
          })
        }
      </div>
    </>
  )
}

export default App
