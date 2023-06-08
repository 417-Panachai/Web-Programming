import "./Home.css";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { itemData } from "../Data";

function Home() {
    const maxItemsToShow = 3
    return(
        <>
            <div className="newCoins">
                <p>เหรียญมาใหม่</p>
                <div className="picNewCoins">
                    {itemData.slice(0, maxItemsToShow).map(item => (
                        <div key={item.id} className="items">
                            <Link to={`/ItemPage/?id=${item.id}&name=${item.name}&value=${item.value}&year=${item.year}&imageURL=${item.imageURL}&info=${item.info}`} id="goToItemPage">
                                <img src={item.imageURL} className="itemImg" alt={item.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="popCoins">
                <p>เหรียญยอดนิยม</p>
                <div className="picPopCoins">
                    {itemData.slice(0, maxItemsToShow).map(item => (
                        <div key={item.id} className="items">
                            <Link to={`/ItemPage/?id=${item.id}&name=${item.name}&value=${item.value}&year=${item.year}&imageURL=${item.imageURL}&info=${item.info}`} id="goToItemPage">
                                <img src={item.imageURL} className="itemImg" alt={item.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;