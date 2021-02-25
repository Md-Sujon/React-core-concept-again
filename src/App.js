import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setProduct(data))

  },[])
  

  // const Product=[
  //   {name:'laptop',Price:'$800',id:'4587'},
  //   {name:'Mobile',Price:'$400',id:'4521'},
  //   {name:'tab',Price:'$300',id:'6952'},
  //   {name:'ButtonPhone',Price:'$200',id:'5452'},
  //   {name:'Phone',Price:'$100',id:'4552'},
  //   ]

  return (
    <div className="App">
      
      {
      
        product.map(List=><Nayok name={List.name} userName={List.username} key={List.id} Price={List.Price} zipCode={List.address.zipcode}></Nayok>)
        
      }

         
      <header className="App-header">
        
        <Sujon></Sujon>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Sujon(){
  const [count,setCount]=useState(0);

  const handler=()=>setCount(count+1);
  const handler1=()=>setCount(count-1);
  const handler2=()=>setCount(count+2);

  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handler}>Increase</button>
      <button onClick={handler1}>Decrease</button>
      <button onClick={handler2}>+2</button>
      <Smita good={count}></Smita>
      <Smita good={count+5}></Smita>
      <Smita good={count+10}></Smita>
      <Smita good={count+15}></Smita>
      <Smita good={count}></Smita>
    </div>
  )
}

function Smita(Props){
  return <h2>Other:{Props.good}</h2>
}

function Nayok(Props){
  var StyleNayok={
    color:'blue',
    border:'5px solid red',
    margin:'10px',
    background:'lightgray'
    
  }
  return (
    <div style={StyleNayok}>
      <h1>Name:{Props.name}</h1>
    <h4>Price:{Props.userName}</h4>
    <h4>zipCode:{Props.zipCode}</h4>
    </div>
  )
 
};


export default App;
