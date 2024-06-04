import React, { useState } from 'react'
import './vote.css'
const Vote = ({state}) => {
  const[name,setName]=useState("");
  const[gpu,setGpu]=useState("");
  const[id,setId]=useState(0);
  const[choice,setChoice]=useState("");
  const {web3,contract}=state;
  const saveinput=async(e)=>{
    e.preventDefault();
    try{
    const weivalue=web3.utils.toWei(0.001,"ether");
    const accounts= await web3.eth.getAccounts();
   await contract.methods.add(name,gpu,id,choice).send({from:accounts[0],value:weivalue,gas:480000});
  }catch(error){
    alert("transaction not successful")
  }
}
  return (
    <form>
    <div>
      <h2>Vote Here</h2>
    </div>
    <div>
    <input className="form-control form-control-sm" type="text" placeholder="Name" aria-label=".form-control-sm example" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <input className="form-control form-control-sm" type="text" placeholder="Gpu" aria-label=".form-control-sm example" value={gpu}  onChange={(e)=>{setGpu(e.target.value)}}/>
    <input className="form-control form-control-sm" type="text" placeholder="id" aria-label=".form-control-sm example" value={id} onChange={(e)=>{setId(e.target.value)}}/>
    <select className="form-select" aria-label="Default select example" onChange={(e)=>{setChoice(e.target.value)}}>
  <option value="" disabled>select party</option>
  <option value="1">Skm</option>
  <option value="2">sdf</option>
</select>
    </div>
    <div>
      <button onClick={saveinput}>vote</button>
    </div>
    </form>
  )
}

export default Vote