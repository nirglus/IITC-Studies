export default function SignUp(props){
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    onChange={props.changeHandler}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    onChange={props.changeHandler}
                    type="email"
                    id="email"
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
                <input
                    onChange={props.changeHandler}
                    type="checkbox"
                    className="term"
                    name="terms"
                    required
                />
                <label htmlFor="terms">I agree to the Terms and Conditions</label>
                <button type="submit">Create Account</button>

            </form>
        </div>
    )
}