import React from 'react'
import { useState,useEffect } from 'react';
import './connect.css'
import Abi from './abi/abi.json'
import Web3 from "web3"
const Connect = ({savestate}) => {
  // const [web3, setWeb3] = useState(null);
  // const [contract, setContract] = useState(null);
  ////0x47f2E78B97dCe0dc5D5cbf508F7C87e8387c3E83
  //  // Replace with the desired index

  // useEffect(() => {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const web3Instance = new Web3(window.ethereum);
  //     setWeb3(web3Instance);

  //     // Subscribe to accountsChanged event
  //     window.ethereum.on('accountsChanged', (newAccounts) => {
  //       setAccount(newAccounts[0]);
  //     });
  //     if(window.ethereum.isConnected()){
  //       const contract= new web3Instance.eth.Contract(
  //         Abi,
  //         "0x47f2E78B97dCe0dc5D5cbf508F7C87e8387c3E83"
  //       )
  //       setContract(contract);

  //       // Fetch initial data
  //   //    fetchData();
  //       };
  //   } else {
  //     console.error('Web3 not found. Please install MetaMask or another Web3 provider.');
  //   }

  //   return () => {
  //     // Unsubscribe from accountsChanged event when the component unmounts
  //     if (typeof window.ethereum !== 'undefined') {
  //       window.ethereum.removeAllListeners('accountsChanged');
  //     }
  //   };
  // }, []);
  
  const connectMetaMask = async () => {
    try {
      // Request account access if needed
      const web3=new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const contract= new web3.eth.Contract(
                 Abi,
             "0x47f2E78B97dCe0dc5D5cbf508F7C87e8387c3E83"
               )
               
      savestate({web3:web3,contract:contract,account:accounts[0]});
    } catch (error) {
      console.error('Insatall MetaMask:', error);
    }
  };

  // const fetchData = async () => {
  //   if (contract && account) {
  //     try {
  //       const result= await contract.methods.display(address).call({ from: account })
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  // };

// const start=async(e)=>{
//   try{
// const web3=new Web3(window.ethereum);
// await window.ethereum.request({method:'eth_requestAccounts'});

// 
//   }catch(error){
//     alert("please install metamask")
//   }
// }
  return (
    <div>
        <button onClick={connectMetaMask}>connect</button>
    </div>
  )
}

export default Connect