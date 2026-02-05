import { useState } from 'react'



function App() {
  let [counter, setCounter] = useState(0)
   let AddValue = () =>{
    setCounter(counter + 1)
    
   }

   let RemoveValue = () =>{
    counter = counter == 0 ? 0 : counter -1;
    setCounter(counter )
    
   }
  return (
    <>
    <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={AddValue}>Add Vlaue</button> <br />
     <button onClick={RemoveValue}>Remove Vlaue</button>
    </>
  )
}

export default App
