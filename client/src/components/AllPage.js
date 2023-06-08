import "./AllPage.css";

function AllPage() {

    const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');
    const name = urlParams.get('name');
    const year = urlParams.get('year');
    const value = urlParams.get('value');
    const imageURL = urlParams.get('imageURL');
    const info = urlParams.get('info');

    return(
        <>
            <p className="AllPageWelcome">รายการเหรียญ</p>
            <div className="AllInfoContainer">
                <img src={imageURL} className="AllPhotoInfo" alt={name} />
                <div className="AllInfo">
                    <div>
                        <div><b>ชื่อเหรียญ</b> {name}</div>
                        <div><b>ปี พ.ศ.</b> {year}</div>
                        <div><b>ค่าเหรียญ</b> {value}</div>
                        <div><b>ข้อมูลเหรียญ</b> {info}</div>
                    </div>
                    <form className="AllForm">
                        <button name="AllSubmit" type="submit" id="AllCancel" value="no">ลบ</button>
                        <button name="AllSubmit" type="submit" id="AllSubmit" value="yes">แก้ไข</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AllPage;