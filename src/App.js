import React, { useReducer,useState } from 'react';
import { reducer } from './reducer';

export default function App() {
  const [inputField , setInputField] = useState({
    value: "",
    val1:"",
    val2:"",
  });
  const inputsHandler = (e) => {
    setInputField({...inputField, [e.target.name]:e.target.value});
  }
 
  

 
  const [state, dispatch] = useReducer(reducer, inputField);

  
  return (
    <>
      <h3> CALCULATOR APPLICATION </h3>
      <input type="text" name="val1" value={inputField.val1} onChange={(e)=>{setInputField(state.val1=(e.target.value))}}></input> <br/> <br />
     <input type="text"  name="val2"  value={inputField.val2} onChange={(e)=>{setInputField(state.val2=e.target.value)}}></input><br/><br/>


      <input value={state.value} type="number"></input><br/><br/>
      
      <button onChange={inputsHandler} onClick={() => dispatch({ type: 'ADDITION' ,payload: {num1: state.val1 , num2: state.val2} })}>
        {' '}
        ADDITION {' '}
      </button>{' '}
      &nbsp;
      <button onChange={inputsHandler} onClick={() => dispatch({ type: 'SUBTRACTION', payload: {num1: state.val1 , num2: state.val2} })}>
        {' '}
        SUBTRACTION {' '}
      </button>{' '}
      &nbsp;
      <button onChange={inputsHandler} onClick={() => dispatch({ type: 'MULTIPLICATION', payload: {num1: state.val1 , num2: state.val2} })}> 
      {' '}
        MULTIPLICATION {' '}
       </button>{' '}
      &nbsp;
      <button onChange={inputsHandler} onClick={() => dispatch({ type: 'DIVISION', payload: {num1: state.val1 , num2: state.val2} })}> 
      {' '}
        DIVISION{' '}
      </button>{' '}<br/><br/>

{/*      
      


      <button onClick={() => dispatch({ type: 'Num1', payload: {num1:1}})}>1</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'Num2', payload: {num2:2}})}>2</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'Num3', payload: {num3:3}})}>3</button><br/><br/>
      <button onClick={() => dispatch({ type: 'Num4', payload: {num4:4}})}>4</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'Num5', payload: {num5:5}})}>5</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'Num6', payload: {num6:6}})}>6</button><br/><br/>
      <button onClick={() => dispatch({ type: 'Num7', payload: {num7:7}})}>7</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'Num8', payload: {num8:8}})}>8</button>&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: 'Num9', payload: {num9:9}})}>9</button>&nbsp;&nbsp; */}
      
      
     </>
  );
}
