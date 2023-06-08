const userData = [
    { 
        id: 1,
        username: "panachai2546p",
        realname: "Panachai" ,
        lastname: "Likhitpanyarat" ,
        email: "panachai2546p@gmail.com",
        password: "asdf123",
        role: "admin"
    },
    {
        id: 2,
        username: "player555",
        realname: "xxx" ,
        lastname: "xxxxxxx" ,
        email: "xxx@gmail.com",
        password: "xxx123",
        role: "user"
    }
];
  
const itemData = [
    {
        id: 1,
        name: "เหรียญรางวัลสถาบันวิจัยข้าวนานาชาติ รัชกาลที่ 9",
        value: 10,
        year: 2540,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-3.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาสที่สถาบันวิจัยข้าวนานาชาติ ทูลเกล้าฯ ถวาย “เหรียญรางวัลสถาบันวิจัยข้าวนานาชาติ” แด่ พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช ในวันที่ 5 มิถุนายน 2539",
        like: "yes"
    },
    {
        id: 2,
        name: "เฉลิมพระเกียรติในการพัฒนาอย่างยั่งยืนเพื่ออนาคตอันมั่นคง รัชกาลที่ 9",
        value: 10,
        year: 2539,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-2.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาสที่องค์การอาหารและเกษตรแห่งสหประชาชาติ ทูลเกล้าฯ ถวาย “เหรียญแอกริโคลา” แด่ พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช ในวันที่ 6 ธันวาคม 2538",
        like: "yes"
    },
    {
        id: 3,
        name: "พระชนมายุ ครบ 3 รอบ รัชกาลที่ 9",
        value: 1,
        year: 2506,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Nickel-Coin-1-Baht-Type-2.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก ในวารดิถีที่พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช พระชนมายุ ครบ 3 รอบ ในวันที่ 5 ธันวาคม 2506",
        like: "no"
    },
    {
        id: 4,
        name: "ปีเยาวชนสากล",
        value: 2,
        year: 2528,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Nickel-Coin-2-Baht-Type-2.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในปีเยาวชนสากล พุทธศักราช 2528",
        like: "no"
    },
    {
        id: 5,
        name: "สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าจุฬาภรณวลัยลักษณ์ ทรงสำเร็จการศึกษาฯ",
        value: 2,
        year: 2522,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Nickel-Coin-2-Baht-Type-1.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาสที่สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าจุฬาภรณวลัยลักษณ์ ทรงสำเร็จการศึกษา ได้รับปริญญาวิทยาศาสตรบัณฑิต จากมหาวิทยาลัยเกษตรศาสตร์ เมื่อวันที่ 19 กรกฎาคม 2522",
        like: "no"
    },
    {
        id: 6,
        name: "เจริญพระชนมายุ ครบ 50 พรรษา รัชกาลที่ 9",
        value: 5,
        year: 2520,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/08/Nickel-Coin-5-Baht-Type-1.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก ในวโรกาสที่พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช เจริญพระชนมายุ ครบ 50 พรรษา ในวันที่ 5 ธันวาคม 2520",
        like: "no"
    },
    {
        id: 7,
        name: "ครบ 120 ปี กระทรวงการคลัง",
        value: 20,
        year: 2538,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Nickel-Coin-20-Baht-Type-3.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาส ครบ 120 ปี กระทรวงการคลัง ในวันที่ 14 เมษายน 2538",
        like: "yes"
    },
    {
        id: 8,
        name: "ครบ 108 ปี แห่งการสถาปนากระทรวงกลาโหม",
        value: 20,
        year: 2538,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Nickel-Coin-20-Baht-Type-2.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาส ครบ 108 ปี แห่งการสถาปนากระทรวงกลาโหม ในวันที่ 8 เมษายน 2538",
        like: "no"
    },
    {
        id: 9,
        name: "พระชนมายุ ครบ 3 รอบ รัชกาลที่ 9",
        value: 20,
        year: 2506,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Silver-Coin-20-Baht-Type-1.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก ในวารดิถีที่พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช พระชนมายุ ครบ 3 รอบ ในวันที่ 5 ธันวาคม 2506",
        like: "yes"
    },
    {
        id: 10,
        name: "เสด็จเถลิงถวัลยราชสมบัติ ครบ 25 ปี รัชกาลที่ 9",
        value: 10,
        year: 2514,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2018/07/Silver-Coin-10-Baht-Type-1.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก ในวารดิถีที่พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช เสด็จเถลิงถวัลยราชสมบัติ ครบ 25 ปี ในวันที่ 9 มิถุนายน 2514",
        like: "no"
    },
    {
        id: 11,
        name: "ครบ 50 ปี สำนักงานคณะกรรมการพัฒนาการเศรษฐกิจและสังคมแห่งชาติ",
        value: 10,
        year: 2543,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-11.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาส ครบ 50 ปี สำนักงานคณะกรรมการพัฒนาการเศรษฐกิจและสังคมแห่งชาติ ในวันที่ 15 กุมภาพันธ์ 2543",
        like: "no"
    },
    {
        id: 12,
        name: "ครบ 100 ปี กรมแพทย์ทหารบก",
        value: 10,
        year: 2542,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-10.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาส ครบ 100 ปี กรมแพทย์ทหารบก ในวันที่ 7 มกราคม 2543",
        like: "no"
    },
    {
        id: 13,
        name: "ครบ 125 ปี กรมศุลกากร",
        value: 10,
        year: 2542,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-9.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาส ครบ 125 ปี กรมศุลกากร ในวันที่ 4 กรกฎาคม 2542",
        like: "yes"
    },
    {
        id: 14,
        name: "เฉลิมฉลองพระราชสมัญญามหาราช รัชกาลที่ 3",
        value: 10,
        year: 2542,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-8.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในโอกาสเฉลิมฉลองพระราชสมัญญามหาราช พระบาทสมเด็จพระปรมาธิวรเสรฐมหาเจษฎาบดินทร พระนั่งเกล้าเจ้าอยู่หัว ในวันที่ 31 มีนาคม 2541",
        like: "no"
    },
    {
        id: 15,
        name: "พระราชพิธีมหามงคลเฉลิมพระชนมพรรษา ครบ 6 รอบ รัชกาลที่ 9",
        value: 10,
        year: 2542,
        imageURL: "https://www.เหรียญกษาปณ์.com/wp-content/uploads/2019/09/Bi-Metallic-Coin-10-Baht-Type-7.jpg",
        info: "เหรียญกษาปณ์ที่ระลึก เนื่องในพระราชพิธีมหามงคลเฉลิมพระชนมพรรษา ครบ 6 รอบ พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช ในวันที่ 5 ธันวาคม 2542",
        like: "no"
    }
];

  
export { userData, itemData };