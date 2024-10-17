import React from "react";
import Feature1 from "../img/Feature1.jpg"
import Feature2 from "../img/Feature2.jpg"
import Feature3 from "../img/Feature3.jpg"
import "../css/About.css"

function About(){
return(

<section className ="featureSection">
    <div className="Container">
        <div className="title">
           알아보고 예약 한번 하기 힘들땐? <br></br>
            <strong>
                <span className="highlight">
                    모두의 예약으로 모든 계획과 예약을 한번에!
                </span>
            </strong>
        </div>
        <ul className="features">
            <li>
            <img className="featureImage" src={Feature1}></img>
            <div className="featureDesc">
                <div>모든것을 전부 예약 가능한 곳</div>
                <div>장소면 장소 상품이면 상품 아무곳이나 예약히야되는곳이면 전부 예약 가능합니다. 한번에 알오보고 예약까지 해보세요!</div>
            </div>
            </li>
            <li>
            <img className="featureImage2" src={Feature2}></img>

            <div className="featureDesc">
            <div>팡팡 터지는 할인혜택들 </div>
            <div>혜택이 한두가지가 아닙니다. 여러 혜택을 누리고 추억도 행복도 누려보세요</div>
            </div>
            </li>
            <li>
            <img className="featureImage3" src={Feature3}></img>
            <div className="featureDesc">
            <div>믿을 수 있는 리뷰 시스템</div>
            <div>실패없는 경험을 보장합니다. 최대 50프로 할인도 받고 국밥같은 상품들을 누려보세요</div>
            </div>
            </li>
            </ul>
    </div>



</section>


);




    
}
export default About;