import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/User";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";

function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({});
  const {user, token, login, register} = useContext(UserContext);
  
  const handleToggle = () =>{
      setIsLoginMode(!isLoginMode);
  }
  const changeHandler = (e) =>{
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitHandler = async(e) =>{
    e.preventDefault();
    if(isLoginMode){

      await login({...formData});
    } else{
      await register({...formData});
    }
  }

  // useEffect(() =>{
  //   console.log(user);
  //   console.log(token);
  // },[user,token])

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
