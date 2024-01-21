export default function Login(props){
    return (
        <div>
            <form onSubmit={props.submitHandler}>
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
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                />
                <input
                    onChange={props.changeHandler}
                    type="checkbox"
                    className="term"
                    id="terms"
                    name="terms"
                    required
                />
                <label htmlFor="terms">I agree to the Terms and Conditions</label>
                <button type="submit">Sign In</button>

            </form>
        </div>
    )
}