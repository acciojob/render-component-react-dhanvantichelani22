import React, {useState} from "react";
import '../styles/App.css';

const App = () => {
  // const[name,setName] = useState();
  // const[email,setEmail] = useState();
  const[collectData,setCollectData]=useState({name:"",email:"",password:""});
  
  const DisplayDetails =(event)=>{
    event.preventDefault();
    console.log(collectData)
    
}
const changeData =(event)=>{
  const {name,value} = event.target
  setCollectData((oldData)=>{
    return {...oldData,[name]:value}

  })
}
  
  return (
    <div id="main">
      <form onSubmit={DisplayDetails}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={collectData.name} onChange={changeData}  />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={collectData.email} onChange={changeData} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={collectData.password} onChange={changeData} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default App;
