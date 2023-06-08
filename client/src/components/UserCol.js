import "./UserCol.css";
import {Link} from "react-router-dom"
import { itemData } from "../Data";

function UserCol() {
    return(
        <>
            <p className="UserColWelcome">ของสะสมของคุณ</p>
            <div className="UserColItems">
                {itemData.map(item => (
                    <div key={item.id} className="items">
                        <Link to={`/ItemPage/?id=${item.id}&name=${item.name}&value=${item.value}&year=${item.year}&imageURL=${item.imageURL}&info=${item.info}&like=${item.like}`} id="goToColPage">
                            <img src={item.imageURL} className="itemImg" alt={item.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserCol;