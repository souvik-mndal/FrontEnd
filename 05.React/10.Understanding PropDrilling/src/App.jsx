
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import nameContext from './Props/data'
import { useContext } from 'react'

function Getting(){
  let name = useContext(nameContext)

  return(
    <>
      <h1>Getting the prop data method 1(using hook)</h1>
      <h2>{name}</h2>
    </>
  )
}
function Getting1(){

  return(
    <nameContext.Consumer>
      {(nme)=>{
        return(
          <>
            <h1>Getting the prop data method 2(by consuming)</h1>
            <h2>{nme}</h2>
          </>
        )
      }}
    </nameContext.Consumer>
  )
}

function App() {

  return (
    <>
      <Getting/>
      <Getting1/>
    </>
  )
}

export default App
