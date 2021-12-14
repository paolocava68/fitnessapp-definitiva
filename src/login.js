import react,{ Component} from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { API_URL } from "./API";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axios = require('axios');
function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [flag, setChecked] = useState(false);
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let body={email:inputs.email,
      password:inputs.password
    }
    event.preventDefault();
 axios.get(API_URL+'user/login?email='+body.email+'&password='+body.password).then(response=>{
   if(response.data.status==='success'){
     toastDisplay("success",'User Login successfully')
    setTimeout(()=>{
      navigate("/home");
    },1500)
   }
   else{
    toastDisplay("error",'invalid Credentials')
   }
   
 })
}
const toastDisplay =(error,message)=>{
  if(error==="success"){
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
  }
  else if(error==="fail",message){
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
  }
  
}
  const signUpPage=() =>{
    setChecked(true)
  }

  const login =()=>{
    setChecked(false)
  }
const handleSubmit1=(event)=>
{
  event.preventDefault();
  let body={
   email:inputs.email,
   phone:inputs.phone,
   password:inputs.password,
   name:inputs.name
  }
  axios.get(API_URL+'user/registerUser?email='+body.email+'&password='+body.password +'&phone='+body.phone +'&name='+body.name).then(res=>{

    if(res.data.status==="success"){
      toastDisplay("success",'User created successfully')
      setChecked(false)
    }
    else{
     toastDisplay("error",'User already exist')
    }
  })
// 
}

  return (flag ? (
    <div className="container">
<div className="row">
  <div className="col"></div>
  <div className="col-md-5 mt-5">
  <div className="card p-3">
    <form onSubmit={handleSubmit1}>
       <h1 className="text-center">Register</h1>
       <div className="mb-3">
     <label>Enter your name: </label> 
     <input 
       type="text"  class="form-control"
       name="name" 
       value={inputs.name || ""} 
       onChange={handleChange}
     />
     </div>
     <div className="mb-3">
     <label>Enter your email: </label> 
     <input 
      class="form-control"
       type="email" 
       name="email" 
       value={inputs.email || ""} 
       onChange={handleChange}
     />
    
     </div>
     <div className="mb-3">
     <label>Enter your phone: </label> 
     <input 
     class="form-control"
       type="number" 
       name="phone" 
       value={inputs.phone || ""} 
       onChange={handleChange}
     />
    
     </div>
     <div className="mb-3">
     <label>Enter your password: </label>
       <input 
       class="form-control"
         type="password" 
         name="password" 
         value={inputs.password || ""} 
         onChange={handleChange}
       />
      
       </div>
       <div className="row">
         <div className="col-6 text-left">
            <button className="btn btn-primary" type="button"onClick={login} >Login</button>
         </div>
         <div className="col-6 text-right">
            <input className="btn btn-primary" type="submit" />
         </div>
       </div>
   </form>
   </div>
  </div>
  <div className="col"></div>
</div>
<ToastContainer/>
</div>
   
  ) :(
    <div className="container">
    <div className="row">
  <div className="col"></div>
  <div className="col-md-5 mt-5">
  <div className="card p-3">
<form onSubmit={handleSubmit}>
        <h1 className="text-center">Login</h1>
       
  <div class="mb-3">
  <label>Enter your Email:
     
     </label> 
    <input 
    class="form-control"
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
  </div>
  <div class="mb-3">
  <label>Enter your password:
       
       </label>
    <input 
    class="form-control"
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
  </div>
  <div className="row">
         <div className="col-6 text-left">
             <button className="btn btn-primary" type="button"onClick={signUpPage} >Sign Up</button>
         </div>
         <div className="col-6 text-right">
            <input className="btn btn-primary" type="submit" />
         </div>
       </div>

</form>
   
    </div>
  </div>
  <div className="col"></div>
</div>
<ToastContainer/>
</div>


  )
    
  )
}
export default Login