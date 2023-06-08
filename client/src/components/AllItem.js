import "./AllItem.css";
import {Link} from "react-router-dom"
import { itemData } from "../Data";
import Footer from "./Footer";

function AllItem() {
    return(
        <>
            <p className="AllWelcome">รายการเหรียญทั้งหมด</p>

            <form className="AllSearch">
                <input type="text" className="searchAllCoin" placeholder="ค้นหาเหรียญ" name="search"/>
                <select className="AllSearchCoinValue" name="coinValue">
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
                <input type="text" className="AllSearchYear" placeholder="ปี พ.ศ." name="coinYear" required />
            </form>

            <div className="AllItems">
                {itemData.map(item => (
                    <div key={item.id} className="Alluest">
                        <Link to={`/AllPage/?id=${item.id}&name=${item.name}&value=${item.value}&year=${item.year}&imageURL=${item.imageURL}&info=${item.info}`} id="goToAllPage">
                            <img src={item.imageURL} className="AllImg" alt={item.name} />
                            <div className="AllContainer">
                                <p id="itemName">{item.name}</p>
                                <p>พ.ศ.{item.year}</p>
                                <p>{item.value} บาท</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default AllItem;