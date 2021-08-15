import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Berean Hub</h3>
                    <span className="loginDesc">Connecting Christians worldwide in Bible study.</span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Already have an account?</span>
                        <button className="loginRegisterButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
