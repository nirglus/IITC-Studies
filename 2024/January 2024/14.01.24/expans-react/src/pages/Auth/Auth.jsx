import { useState} from "react";
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

function Auth(props){
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formData, setFormData] = useState({});
    let toggleTxt = setIsLoginMode ? "Register" : "Log In";

    const handleToggle = () =>{
        setIsLoginMode(!isLoginMode);
    }
    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("Email:", formData.email);
        console.log("Password:", formData.password);
        console.log('Form Data:', formData);
      
        if (isLoginMode) {
          const userCard = await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          props.setUser(userCard.user);
          console.log("Signed in succesfully");
        } else {
          const userCard = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          console.log("Signed up succesfully");
          props.setUser(userCard.user);
        }
      };

    return (
        <div className="loginCont">
            <button onClick={handleToggle}>{toggleTxt}</button>
            {
                isLoginMode ?
                    <Login submitHandler={submitHandler} changeHandler={changeHandler} />
                    :
                    <SignUp submitHandler={submitHandler} changeHandler={changeHandler} />
            }

            <p onClick={handleToggle} >
                {isLoginMode ? "Go to create account" : "already have account"}
            </p>
        </div>
    )
}

export default Auth;