import "./DecisionPage.css";

function DecisionPage() {

    const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');
    const name = urlParams.get('name');
    const year = urlParams.get('year');
    const value = urlParams.get('value');
    const imageURL = urlParams.get('imageURL');
    const info = urlParams.get('info');

    return(
        <>
            <p className="DPageWelcome">ตรวจสอบคำร้อง</p>
            <div className="DInfoContainer">
                <img src={imageURL} className="DPhotoInfo" alt={name} />
                <div className="DInfo">
                    <div>
                        <div><b>ชื่อเหรียญ</b> {name}</div>
                        <div><b>ปี พ.ศ.</b> {year}</div>
                        <div><b>ค่าเหรียญ</b> {value}</div>
                        <div><b>ข้อมูลเหรียญ</b> {info}</div>
                    </div>
                    <form className="DForm">
                        <button name="DSubmit" type="submit" id="DCancel" value="no">ยกเลิก</button>
                        <button name="DSubmit" type="submit" id="DSubmit" value="yes">ตกลง</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default DecisionPage;