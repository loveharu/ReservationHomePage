import React, { useState, useEffect, useRef } from 'react';
import Banner from '../img/VendorBanner.jpg'; // 배너 이미지 경로
import ChartIcon from '../img/ChartBanner.jpg'; // 아이콘 예시 이미지
import PromotionIcon from '../img/promotion.jpg';
import Sup from '../img/sup.png';
import '../css/Vendor.css';
import axios from 'axios';

function Vendor() {
    const [serverPort, setServerPort] = useState('8081');
    const benefitItems = useRef([]); // 항목들을 참조하기 위한 ref 배열

    useEffect(() => {
        axios.get('ex/api/getPort') // 기본 포트 번호로 요청
          .then(response => {
            setServerPort(response.data); // 서버에서 받은 포트 번호로 업데이트
            console.log('서버 포트 번호:', response.data);
          })
          .catch(err => console.error('포트 번호 요청 오류:', err));
    }, []);

    useEffect(() => {
        // Intersection Observer 설정
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 요소가 화면에 들어오면 'visible' 클래스를 추가
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // 애니메이션 후 더 이상 관찰하지 않음
                }
            });
        });

        // 모든 항목을 관찰 대상으로 등록
        benefitItems.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            // 컴포넌트가 언마운트될 때 observer 해제
            if (benefitItems.current) {
                benefitItems.current.forEach(item => observer.unobserve(item));
            }
        };
    }, []);

    return (
        <div className="vendor-container">
            <h1 className="title">판매자도 <strong>고객이죠!</strong></h1>
            <div className="banner-section">
                <img className="feature-image" src={Banner} alt="Vendor Promotion Banner" />
            </div>

            {/* 주요 혜택 소개 (가로 나열) */}
            <div className="benefit-section">
                <h2>판매자를 위한 최고의 혜택</h2>
                <ul className="benefit-list">
                    <li ref={el => benefitItems.current[0] = el}>
                        <img className="icon" src={PromotionIcon} alt="promotion" />
                        <h3>특별 프로모션</h3>
                        <p>맞춤형 프로모션으로 매출을 증대하세요.</p>
                    </li>
                    <li ref={el => benefitItems.current[1] = el}>
                        <img className="icon" src={ChartIcon} alt="analytics" />
                        <h3>실시간 분석 도구</h3>
                        <p>실적과 통계를 확인할 수 있습니다.</p>
                    </li>
                    <li ref={el => benefitItems.current[2] = el}>
                        <img className="icon" src={Sup} alt="support" />
                        <h3>전문 지원 서비스</h3>
                        <p>24/7 고객 지원을 이용하세요.</p>
                    </li>
                </ul>
            </div>

            <div className="cta-section">
                <h2>지금 등록하고 더 많은 혜택을 누리세요!</h2>
                
                <button className="cta-button">판매자 등록하기</button>
            </div>
        </div>
    );
}

export default Vendor;
