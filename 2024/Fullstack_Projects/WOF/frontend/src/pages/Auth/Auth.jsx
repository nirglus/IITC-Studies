import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/User";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
import axios from "axios";

function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({});
  const {user, setUser, token, setToken, login, register} = useContext(UserContext);
  
  const handleToggle = () =>{
      setIsLoginMode(!isLoginMode);
  }
  const changeHandler = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitHandler = async(e) =>{
    e.preventDefault();
    if(isLoginMode){
      setUser(formData);
      await login(user);
    } else{
      setUser(formData);
      await register(user);
    }
    // try {
    //   if(isLoginMode){
    //     const response = await axios.post('http://localhost:2000/wof/users/login', {
    //       email: formData.email,
    //       password: formData.password
    //   });
    //   console.log(response);
    //   setUser(response.data.user);
    //   setToken(response.data.token);
    //   console.log('Login successful:', user);
    //   } else{
    //     const res = await axios.post('http://localhost:2000/wof/users/register',
    //     {
    //       fullName: formData.fullName,
    //       email: formData.email,
    //       password: formData.password
    //     })
    //     setUser(res.data.user);
    //     setToken(res.data.token);
    //     console.log('Register successful:', user);
    //   }
    // } catch (error) {
    //   console.error('Login/Register failed:', error);
    // }
  }
  useEffect(() =>{
    console.log(user);
    console.log(token);
  },[user,token])

  return (
    <div>
       {isLoginMode ?
          <Login submitHandler={submitHandler} changeHandler={changeHandler} />
        :
          <Register submitHandler={submitHandler} changeHandler={changeHandler} />
       }
      <p className="toggleLog" onClick={handleToggle} >
        {isLoginMode ? "Don't have an account? Register" : "Have an account? Login"}
      </p>
    </div>
  )
}

export default Auth
