import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: ''})
    const navigate = useNavigate();

    const handleChange = (e) => {
       setLoginData((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit = () => {
        const { username, password } = loginData;
        if(username === 'admin' && password === 'password') {
            localStorage.setItem("isAuth", "true")
            navigate('/dashboard')
        } else {
            console.log('Credentials Wrong')
        }
    }
    return (
        <div className="login-form">
            <div className="form-control-flex">
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" className="form-control" onChange={(e) => handleChange(e)}/>
            </div>
            <div className="form-control-flex">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" onChange={(e) => handleChange(e)}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;