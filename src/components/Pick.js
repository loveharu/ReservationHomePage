
import "../css/Pick.css";
import React, { useState } from "react";
import foodPick from "../img/foodPick.png"
import hairPick from "../img/hairPick.png";
import parkPick from "../img/parkPick.png";
function Pick() {
    const [serverPort, setServerPort] = useState('8081'); // 기본 포트는 8081로 설정
    return (
        <section className="Picker">
            <div className="Container">
                <div className="title">이거 <strong>Pick!</strong></div>
                <ul className="PickList">
                    <li>
                        <img className="food" src={foodPick} alt="Food Pick"></img>
                        <div className="desc">오늘의 맛집</div>
                    </li>
                    <li>
                        <img src={hairPick} alt="hairPick Pick" />
                        <div className="desc">올해의 헤어 스타일</div>
                    </li>
                    <li>
                        <img src={parkPick} alt=" parkPick" />
                        <div className="desc">지금 바로 갈만한 페스티벌!</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Pick;
