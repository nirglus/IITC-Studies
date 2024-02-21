function Register(props) {
  return (
    <div className="loginCont">
        <h2>World of Formula</h2>
        <p>Register</p>
        <form className="authForm" onSubmit={props.submitHandler}>
            <input
                onChange={props.changeHandler}
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                required
            />
            <input
                onChange={props.changeHandler}
                type="email"
                name="email"
                placeholder="example123@email.com"
                required
            />
            <input
                onChange={props.changeHandler}
                type="password"
                name="password"
                placeholder="Enter your password"
                required
            />
            <button type="submit">Create Account</button>
        </form>
    </div>
  )
}

export default Register
