import "./UserInfo.css";
import { userData } from "../Data";

function UserInfo() {
    const user = userData[0];
    return(
        <>
            <p className="userInfoWelcome">ข้อมูลผู้ใช้</p>
            <div className="userInfoDetail">
                <img src="https://onecms-res.cloudinary.com/image/upload/s--O2ieHjKj--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2023/02/27/istock-1357759108.jpg?itok=zKcg0hVU" className="userPhoto" alt="userPhoto" />
                
                <div className="detailUserElement">
                    <div><b>ชื่อผู้ใช้</b> {user.username}      </div>
                    <div><b>ชื่อจริง</b> {user.realname}      </div>
                    <div><b>นามสกุล</b> {user.lastname}     </div>
                    <div><b>email</b> {user.email}         </div>
                    <div><b>รหัสผ่าน</b> {user.password}     </div>

                    {/* <input type="submit" id="edit" className="edit" value="แก้ไขข้อมูล" /> */}
                </div>
            </div>
        </>
    );
}

export default UserInfo;