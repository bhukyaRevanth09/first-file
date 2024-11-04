import { useState } from 'react'

import './App.css'

function App() {
  let [details,Setdetails] = useState({});

  function handing(event){
  
 Setdetails((prev)=>{
 return{...prev,[event.target.name]:event.target.value}
  })
  }


   function heree(){
    console.log(details)
   }
  

  return (
    <>
    <div>
    <h1>{details.name}</h1>
      <h1>{details.password}</h1>
      <h1>{details.email}</h1>
 <form>
 <label> Name : <input type="text" name='name' placeholder='Enter Name' onChange={handing} /></label><br/>
 <label> Password : <input type="Password" name='password' placeholder='Enter password' onChange={handing} /></label><br/>
 <label> Email : <input type="Email" name='email' placeholder='Enter Email' onChange={handing} /></label><br/>
<p onClick={heree}>click me</p>
 </form>
 
    
    </div>
    </>
  )
}

export default App
