import React from 'react';
import Banner from '../img/VendorBanner.jpg'; // 배너 이미지 경로
import ChartIcon from '../img/ChartBanner.jpg'; // 아이콘 예시 이미지
import PromotionIcon from '../img/promotion.jpg';
import Sup from '../img/sup.png';
import '../css/Vendor.css';

function Vendor() {
    return (
        <div className="vendor-container">
            {/* 상단 배너 (중앙 정렬) */}
            <h1 className="title">판매자도 <strong>고객이죠!</strong></h1>
            <div className="banner-section">
                <img className="feature-image" src={Banner} alt="Vendor Promotion Banner" />
            </div>

            {/* 주요 혜택 소개 (가로 나열) */}
            <div className="benefit-section">
                <h2>판매자를 위한 최고의 혜택</h2>
                <ul className="benefit-list">
                    <li>
                        <img className="icon" src={PromotionIcon} alt="promotion" />
                        <h3>특별 프로모션</h3>
                        <p>맞춤형 프로모션으로 매출을 증대하세요.</p>
                    </li>
                    <li>
                        <img className="icon" src={ChartIcon} alt="analytics" />
                        <h3>실시간 분석 도구</h3>
                        <p>실적과 통계를 확인할 수 있습니다.</p>
                    </li>
                    <li>
                        <img className="icon" src={Sup} alt="support" />
                        <h3>전문 지원 서비스</h3>
                        <p>24/7 고객 지원을 이용하세요.</p>
                    </li>
                </ul>
            </div>

            {/* CTA (Call to Action) 섹션 */}
            <div className="cta-section">
                <h2>지금 등록하고 더 많은 혜택을 누리세요!</h2>
                <button className="cta-button">판매자 등록하기</button>
            </div>
        </div>
    );
}

export default Vendor;