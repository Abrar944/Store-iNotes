import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

const SignUp = () => {
  const [credentials, setCredentials] = useState({ email: " ", password: " " });
  const history = useNavigate();
  const handlesubmit = async (e) => {
    const {name,email,password,} = credentials;
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      history("../LoginPage", { replace: true })
      
    }
    else{
      alert("Invalid Credentials")
    }
  };
  const handlechange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar/>
    <div className='container'>
          
      <form onSubmit={handlesubmit} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    name='name' aria-describedby="emailHelp"onChange={handlechange} />
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email'aria-describedby="emailHelp" onChange={handlechange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name = 'password'  onChange={handlechange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">ConfirmPassword</label>
    <input type="cpassword" className="form-control" id="exampleInputPassword1" name='cpassword'onChange={handlechange} />
  </div>
  
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>
          </div>
          </>
  )
}

export default SignUp