import React, { useState } from 'react'

const Checkvote = ({state}) => {
  const {contract} =state;
const [address,setAddress]=useState("");
const[check,setCheck]=useState(null);
const showdata=async (e)=>{
  e.preventDefault();
  if (contract) {
    try {
  const show= await contract.methods.display(address).call({ from: state.account })
  setCheck(show);
  console.log(show);
}catch(error){
  console.log(error);
}
  }
  }
  return (
    <>
    <div>checkvote</div>
    <form>
    <div>
    <input className="form-control form-control-sm" type="text" placeholder="Voter address" aria-label=".form-control-sm example" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
    </div>
    <button onClick={showdata}>check</button>
    </form>
    {check !== null ? <p>{check}</p>: <p></p>}
    </>
  )
}

export default Checkvote