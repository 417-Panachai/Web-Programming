import "./About.css";
import MyPhoto from "../MyPhoto.jpg"

const txtBigScreen = `สวัสดีครับ\n
\tผมชื่อ นายปณชัย ลิขิตปัญญาราษฎร์
ผมเป็นนักศึกษาอยู่ชั้นปีที่ 2 คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ประยุกต์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี

\tเว็บไซต์นี้จัดทำขึ้นเพื่อเป็นโปรเจคของรายวิชา web programming
โดยมีเครื่องมือที่ใช้เป็น React ในส่วนของ Front-end ใช้ Node.js ในส่วนของ Back-end และใช้ MongoDB เป็นส่วนของ database
ทั้งนี้ขอขอบคุณทุกท่านที่ให้ความสนใจในเว็บไซต์ของผมด้วยครับ
`
const txtSmallScreen = `สวัสดีครับ\n
\tผมชื่อ นายปณชัย ลิขิตปัญญาราษฎร์
ผมเป็นนักศึกษาอยู่ชั้นปีที่ 2 คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ประยุกต์
มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี

\tเว็บไซต์นี้จัดทำขึ้นเพื่อเป็นโปรเจคของรายวิชา web programming
โดยมีเครื่องมือที่ใช้เป็น React ในส่วนของ Front-end
ใช้ Node.js ในส่วนของ Back-end และใช้ MongoDB เป็นส่วนของ database
ทั้งนี้ขอขอบคุณทุกท่านที่ให้ความสนใจในเว็บไซต์ของผมด้วยครับ
`

function About() {
    return(
        <>
            <p className="aboutWelcome">เกี่ยวกับเรา</p>
            <div className="aboutInfoContainer">
                <img src={MyPhoto} className="aboutPhotoInfo" alt="MyPhoto" />
                <pre id="txtBig" className="aboutInfo">{txtBigScreen}</pre>
                <pre id="txtSmall" className="aboutInfo">{txtSmallScreen}</pre>
            </div>
        </>
    );
}

export default About;