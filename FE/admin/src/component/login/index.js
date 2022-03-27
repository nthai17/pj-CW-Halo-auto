import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss'

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const navigate = useNavigate()
    const handleLogin = () => {
        if (id && password) {
            if (id === process.env.REACT_APP_ADMIN_ID && password === process.env.REACT_APP_ADMIN_PASSWORD) {
                localStorage.setItem('isAdminLogin', true)
                navigate('/')
            } else {
                setErrorMessage(true)
            }
        }
    }
    return ( 
        <div className="login">
            <div className="login__form">
                {errorMessage && <div className="login__form__message">Bạn không phải admin!</div>}
                <div className="login__form__group">
                    <span>ADMIN ID:</span>
                    <input value={id} onChange={(e) => setId(e.target.value)}/>
                </div>
                <div className="login__form__group">
                    <span>ADMIN PASSWORD:</span>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="login__form__btn">
                    <button onClick={handleLogin}>Đăng nhập</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
