import React, { useState } from 'react';

const App = () =>{
  const[fullName,setFullName]=useState({
    name : "",
    pass : "",
    email : "",
    number : "",
  });
  

  const InputEvent = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);

  };
  
  const onSubmit = (event) =>{
    console.log(event.target.value);
       alert("form submitted.");
  };
  

  return(
    <>
    <div>
      <form >
      <div>
      <h1>Hello {fullName.name} {fullName.pass} {fullName.email}</h1>
      <input type="text" placeholder="Enter Your Username" name="name" onChange={InputEvent} value={fullName.name}/>
      <input type="password" placeholder='Enter Your Password' name="pass" onChange={InputEvent} value={fullName.pass}/>
      <input type="text" placeholder='Enter Your Email' name="email" onChange={InputEvent} value={fullName.email}/>
      <input type="number" placeholder="Enter Your Mobile Number" name="number" onChange={InputEvent} value={fullName.number}/>
      <button onClick={onSubmit} type="submit" value="Submit">Submit</button>
      </div>
      </form>
      </div>
      </>
  );
};

export default App;
