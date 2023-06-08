import "./Footer.css";

function Footer(){
    return (
        <footer>
            <p>เกี่ยวกับผู้จัดทำ</p>
            <div className="contact">
                <div className="social_media">
                    <a href="https://www.facebook.com/profile.php?id=100010721504176" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://github.com/417-Panachai" target="_blank" rel="noopener noreferrer">GitHup</a>
                </div>
                <p className="phone">Tel. 095-290-1434</p>
            </div>
            <p>Copyright © 2023 Web programming สงวนสิทธิ์ทุกประการ</p>
        </footer>
    );
}

export default Footer;