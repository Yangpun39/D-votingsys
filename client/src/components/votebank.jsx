import React, { useEffect, useState } from 'react'

const Votebank = ({state}) => {

    const {contract}=state;
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const voting=async()=>{
     const result = await contract.methods.votebank().call()
     console.log(result)
     setValue1(result[0].toString())
     setValue2(result[1].toString())
     console.log(value1)
     console.log(value2)
    };

  return (<>
    <button onClick={voting}>votebank</button>
   <ul>
    {}
   </ul>
    <h3>skm</h3>
    <h5>{value1}</h5>
    <h3>sdf</h3>
    <h5>{value2}</h5>
</>
  )
}

export default Votebank