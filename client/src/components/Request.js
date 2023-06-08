import "./Request.css";

function Request() {
    return(
        <>
            <p className="RequestWelcome">รายการคำร้อง</p>
            <form className="RequestForm">
                <div className="photoRequestContainer">
                    <label for="photoRequest" id="photoRequestLabel"><b>+ อัปโหลดรูปภาพของเหรียญ</b></label>
                    <input type="file" id="photoRequest" className="RequestElement" placeholder="รูป" name="photoRequest" required/>
                </div>

                <input type="text" className="RequestElement" placeholder="ชื่อเหรียญ" name="coinName" required/>
                <input type="text" className="RequestElement" placeholder="ปี พ.ศ." name="year" required/>
                <input type="text" className="RequestElement" placeholder="ค่าเหรียญ" name="coinValue" required/>
                <input type="text" className="RequestElement" placeholder="ข้อมูลเหรียญ" name="coinInfo" required/>
                
                <input type="submit" id="RequestSubmit" className="RequestSubmit" value="ส่งคำร้อง" />
            </form>
        </>
    );
}

export default Request;