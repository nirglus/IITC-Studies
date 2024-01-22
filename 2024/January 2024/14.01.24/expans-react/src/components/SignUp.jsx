
function SignUp(props){
    return (
        <div>
            <form onSubmit={props.submitHandler}>
            <label htmlFor="email">Email</label>
                <input
                    onChange={props.changeHandler}
                    type="email"
                    name="email"
                    placeholder="example123@email.com"
                    required
                />
                <label htmlFor="password">Password</label>
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

export default SignUp;