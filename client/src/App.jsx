import { useState } from 'react'
import Checkvote from './components/checkvote'
import Vote from './components/vote'
import Votebank from './components/votebank'
import './App.css'
import Connect from './components/connect'
//0x47f2E78B97dCe0dc5D5cbf508F7C87e8387c3E83
function App() {
  const[state,setState]=useState({web3:null,contract:null,account:null});
  //const [useaccount,setUseaccount]=useState();
  //const[value,setValue]=useState({name:null,gpu:null,id:null,choice:null})
 const savestate=(state)=>{
  setState(state);
 }
//  const currentaccount=(useaccount)=>{
//   setUseaccount(useaccount);
//  }
// const handleinput=(value)=>{
// console.log(value);
// }
  return (
    <>
      <Connect savestate={savestate} ></Connect>
        <Vote  state={state}></Vote>
        <Checkvote state={state} ></Checkvote>
        <Votebank state={state}></Votebank>
    </>
  )
}

export default App
