import "./RequestOrder.css";
import {Link} from "react-router-dom"
import { itemData } from "../Data";
import Footer from "./Footer";

function RequestOrder() {
    return(
        <>
            <p className="RequestOrderWelcome">รายการคำร้อง</p>
            
            
            
            <div className="ReqItems">
                {itemData.map(item => (
                    <div key={item.id} className="request">
                        <Link to={`/decisionPage/?id=${item.id}&name=${item.name}&value=${item.value}&year=${item.year}&imageURL=${item.imageURL}&info=${item.info}`} id="goToReqPage">
                            <img src={item.imageURL} className="reqImg" alt={item.name} />
                            <div className="ReqContainer">
                                <p id="orderItemName">{item.name}</p>
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

export default RequestOrder;