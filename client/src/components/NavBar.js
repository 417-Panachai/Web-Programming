import "./NavBar.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Home from "./Home";
import Sing_in from "./Sing_in";
import Register from "./Register";
import About from "./About";
import Gallery from "./Gallery";
import ItemPage from "./ItemPage";
import UserCol from "./UserCol";
import Request from "./Request";
import RequestOrder from "./RequestOrder";
import DecisionPage from "./DecisionPage";
import AllItem from "./AllItem";
import AllPage from "./AllPage";
import UserInfo from "./UserInfo";

function NavBar(){
    const valueLogin = "admin";
    return(
        <nav>
            <Router>
                <div className="navBarCom">
                    <div className="nav-left">
                        <Link to="/">หน้าแรก</Link>
                        <Link to="/gallery">แกลลอรี่</Link>
                        <Link to="/about" className="canHide">เกี่ยวกับเรา</Link>
                    </div>
                    <form className="navBarForm">
                        <Link to="/gallery">
                            <input type="text" className="searchCoin" placeholder="ค้นหาเหรียญ" name="search"/>
                        </Link>
                    </form>
                    <div className="nav-right">
                        {valueLogin === "none" &&
                            <div>
                                <Link to="/register" className="canHideSmaller">ลงทะเบียน</Link>
                                <Link to="/sing_in">เข้าสู่ระบบ</Link>
                            </div>
                        }

                        {valueLogin === "admin" &&
                            <div className="admin">
                                <div class="dropdown">
                                    <button class="dropbtn">&#9776;</button>
                                    <div class="dropdown-content">
                                        <Link to="/UserInfo">ข้อมูลผู้ใช้</Link>
                                        <Link to="/UserCol">ของสะสมของคุณ</Link>
                                        <Link to="/AllItem">เหรียญทั้งหมด</Link>
                                        <Link to="/Request">คำร้องขอเพิ่มเหรียญ</Link>
                                        <Link to="/RequestOrder">ตรวจสอบคำร้อง</Link>
                                        <Link to="#">ออกจากระบบ</Link>
                                    </div>
                                </div>
                            </div>
                        }
                        {valueLogin === "user" &&
                            <div className="user">
                                <div class="dropdown">
                                    <button class="dropbtn">&#9776;</button>
                                    <div class="dropdown-content">
                                        <Link to="/UserInfo">ข้อมูลผู้ใช้</Link>
                                        <Link to="/UserCol">ของสะสมของคุณ</Link>
                                        <Link to="/Request">คำร้องขอเพิ่มเหรียญ</Link>
                                        <Link to="#">ออกจากระบบ</Link>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>

                <Switch>
                    <Route path="/" exact><Home /></Route>
                    <Route path="/gallery"><Gallery /></Route>
                    <Route path="/ItemPage"><ItemPage /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/register"><Register /></Route>
                    <Route path="/sing_in"><Sing_in /></Route>
                    <Route path="/UserCol"><UserCol /></Route>
                    <Route path="/Request"><Request /></Route>
                    <Route path="/RequestOrder"><RequestOrder /></Route>
                    <Route path="/DecisionPage"><DecisionPage /></Route>
                    <Route path="/AllItem"><AllItem /></Route>
                    <Route path="/AllPage"><AllPage /></Route>
                    <Route path="/UserInfo"><UserInfo /></Route>
                </Switch>
            </Router>
        </nav>
    )
}

export default NavBar;