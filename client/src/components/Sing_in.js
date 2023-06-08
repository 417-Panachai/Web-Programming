import "./Sing_in.css";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function Sing_in() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/sing_in").then((response)=>{
            setUserList(response.data)
            // console.log(response.data)
        })
    }, [])

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username === username && userList[i].password === password) {
            console.log(userList[i].username);
            break;
        }
    }




    return(
        <>
            <p className="singInWelcome">เข้าสู่ระบบ</p>
            <form className="singInForm">
                <input type="text" id="userName" className="singInElement" placeholder="ชื่อผู้ใช้" required onChange={(event)=>{setName(event.target.value);}}/>
                <input type="password" className="singInElement" placeholder="รหัสผ่าน" required onChange={(event)=>{setPassword(event.target.value);}}/>
                
                <input type="submit" id="singInSubmit" className="singInSubmit" value="เข้าสู่ระบบ" required onClick={Sing_in}/>
            </form>
            <div className="goToRegisterContainer">
                <Link to="/register" id="goToRegister">สร้างบัญชีผู้ใช้</Link>
            </div>
        </>
    );
}

export default Sing_in;