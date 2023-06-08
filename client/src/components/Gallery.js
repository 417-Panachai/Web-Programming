import "./Gallery.css"
import {Link} from "react-router-dom";
import Footer from "./Footer"

import { itemData } from "../Data";

function Gallery() {
    return(
        <>
            <div className="GalleryWelcome">
                <p id="GalleryWelcomeBig">แกลลอรี่</p>
                <p id="GalleryWelcomeLittle">เหรียญทั้งหมด</p>
            </div>
            <form className="GallerySearch">
                <select className="GallerySearchCoinValue" name="coinValue">
                    <option value="none">ค่าเหรียญ</option>
                    <option value="0.01">1 สตางค์</option>
                    <option value="0.05">5 สตางค์</option>
                    <option value="0.1">10 สตางค์</option>
                    <option value="0.25">25 สตางค์</option>
                    <option value="0.5">50 สตางค์</option>
                    <option value="1">1 บาท</option>
                    <option value="5">5 บาท</option>
                    <option value="10">10 บาท</option>
                    <option value="20">20 บาท</option>
                </select>
                <input type="text" className="GallerySearchYear" placeholder="ปี พ.ศ." name="coinYear" required />
            </form>
            <div className="GalleryItems">
                {itemData.map(item => (
                    <div key={item.id} className="items">
                        <Link to={`/ItemPage/?id=${item.id}&name=${item.name}&value=${item.value}&year=${item.year}&imageURL=${item.imageURL}&info=${item.info}&like=${item.like}`} id="goToItemPage">
                            <img src={item.imageURL} className="itemImg" alt={item.name} />
                        </Link>
                    </div>
                ))}
            </div>








            <Footer />
        </>
    );
}

export default Gallery;