import { useState } from "react";
import avatarImg from "./avatar.png"; 
import "./signin.css";
export const Signin = () => { 
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem('userName', value);
        window.location.reload(false);
    }
    return(
    <>  
       
        <div className="user">
            <form onSubmit={handleSubmit} className="user-form">
                <img 
                    src={avatarImg}
                    className="user-img"
                    width="160px" 
                    height="160px" 
                    alt=""
                /><br />
                <label for="user-name" className="user-label">Username</label><br />
                <input
                    type="text"
                    id="user-name"
                    name="user-name"
                    placeholder="type Username"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                /><br />
                <button
                    type="submit"
                    className="user-submit"
                    disabled={value.length < 5 || value.length > 16}>
                    Sign-in
                </button>
            </form>     
        </div>
    </>
    )
}