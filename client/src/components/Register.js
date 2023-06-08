import "./Register.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function Register() {
    const [username, setName] = useState("");
    const [realName, setRealName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const regis = () =>{
        if(password === confirm){
            axios.post("http://localhost:3001/register", {
                username : username,
                realName : realName,
                lastName : lastName,
                email : email,
                password : password
            });
        }
        else{
            alert("รหัสผ่านไม่ตรงกัน");
        }
        
    };

    return(
        <>
            <p className="RegisWelcome">สร้างบัญชี</p>
            <form className="RegisForm">
                <input type="text" id="userName" className="RegisElement" placeholder="ชื่อผู้ใช้" required onChange={(event)=>{setName(event.target.value);}} />
                <input type="text" className="RegisElement" placeholder="ชื่อจริง" required onChange={(event)=>{setRealName(event.target.value);}} />
                <input type="text" className="RegisElement" placeholder="นามสกุล" required onChange={(event)=>{setLastName(event.target.value);}} />
                <input type="email" className="RegisElement" placeholder="Email" required onChange={(event)=>{setEmail(event.target.value);}} />
                <input type="password" className="RegisElement" placeholder="รหัสผ่าน" required onChange={(event)=>{setPassword(event.target.value);}} />
                <input type="password" className="RegisElement" placeholder="ยืนยันรหัสผ่าน" required onChange={(event)=>{setConfirm(event.target.value);}} />
                
                <input type="submit" id="RegisSubmit" className="RegisSubmit" value="ลงทะเบียน" onClick={regis}/>
            </form>
            <div className="goToSingInContainer">
                <Link to="/sing_in" id="goToSingIn">มีบัญชีผู้ใช้อยู่แล้ว?</Link>
            </div>
        </>
    );
}

export default Register;