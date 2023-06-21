import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({}); // this is what he used in the video 1:57 class
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            const test = await dispatch(loginThunk({ username, password }));
            setTimeout(() => {
                if ("error" in test) {
                    navigate("/tuiter/login");
                    alert("login unsucessfull try again");
                } else
                    navigate("/tuiter/home");
            }, 5000);
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div className="row">
            <h1>Login Screen</h1>
            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" value={username}
                    onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button className="btn btn-primary mt-2"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
export default LoginScreen;