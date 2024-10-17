import React from "react";
import '../css/footer.css';
import Logo from "../img/Logo.png"
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

function Footer(){

    return(

        <footer class="footer">
    <div class="footer-container">
        <div class="footer-logo">
            <img src={Logo} alt="Site Logo" />
            <p><strong>최고의 예약 서비스를 제공하는 사이트입니다.</strong></p>
        </div>

       

        <div class="footer-contact">
            <h3>고객 지원</h3>
            <p>전화: 123-456-7890</p>
            <p>이메일: support@example.com</p>
            <p>운영시간: 월~금 9:00 - 18:00</p>
        </div>

        <div className="footer-social">
    <h3>소셜 미디어</h3>
    <a href="#"><Facebook style={{ fontSize: '24px' }} /></a>
    <a href="#"><Instagram style={{ fontSize: '24px' }} /></a>
    <a href="#"><Twitter style={{ fontSize: '24px' }} /></a>
    <a href="#"><YouTube style={{ fontSize: '24px' }} /></a>
</div>

        
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 예약 사이트. 모든 권리 보유.</p>
        <p>주소: 서울특별시, 대한민국</p>
    </div>
</footer>

    );


}

export default Footer;