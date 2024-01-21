import { useState } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/Signup";

export default function Auth(props){
    const [isLoadingMode, setIsLoadingMode] = useState(true);
    const [formData, setData] = useState();
    let toggleTxt = setIsLoadingMode ? "Register" : "Log In";

    const handleToggle = () =>{
        setIsLoadingMode (!setIsLoadingMode);
    }
    const changeHandler = (e) =>{
        setData({...formData, [e.target.name]: e.target.value});
    };
    const submitHandler = (e) =>{
        e.preventDefault();
        props.setData({...formData});

        const formValues = Object.values(e.target);
        formValues.forEach(form =>{
            form.value = "";
        })
    }


    return (
        <div className="loginCont">
            <button onClick={handleToggle}>{toggleTxt}</button>
            {isLoadingMode ? (
                <Login changeHandler={changeHandler} handleSubmit={submitHandler} />
            ) : (
                <SignUp changeHandler={changeHandler} handleSubmit={submitHandler} />
            )}
        </div>
    )
}