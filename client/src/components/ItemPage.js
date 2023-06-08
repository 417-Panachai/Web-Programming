import "./ItemPage.css"

function ItemPage() {

    const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');
    const name = urlParams.get('name');
    const year = urlParams.get('year');
    const value = urlParams.get('value');
    const imageURL = urlParams.get('imageURL');
    const info = urlParams.get('info');
    const like = urlParams.get('like');

    return(
        <>
            <p className="ItemPageWelcome">ข้อมูลเพิ่มเติม</p>
            <div className="itemInfoContainer">
                <img src={imageURL} className="ItemPhotoInfo" alt={name} />
                <div className="ItemInfo">
                    <div><b>ชื่อเหรียญ</b> {name}</div>
                    <div><b>ปี พ.ศ.</b> {year}</div>
                    <div><b>ค่าเหรียญ</b> {value}</div>
                    <div><b>ข้อมูลเหรียญ</b> {info}</div>
                    {like === "no" &&
                        <form className="box">
                            <input type="submit" id="heart" value="สะสม"/>
                        </form>
                    }
                    {like === "yes" &&
                        <form className="box">
                            <input type="submit" id="likeHeart" value="เลิกสะสม"/>
                        </form>
                    }
                </div>
            </div>
        </>
    );
}

export default ItemPage;