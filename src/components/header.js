import React, { useState, useEffect } from 'react';
import "../css/header.css";
import Logo from '../img/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [serverPort, setServerPort] = useState('8081'); // 기본 포트는 8081로 설정

  // 컴포넌트가 로드될 때, 서버로부터 포트 번호를 요청
  useEffect(() => {
    axios.get('ex/api/getPort') // 기본 포트 번호로 요청
      .then(response => {
        setServerPort(response.data); // 서버에서 받은 포트 번호로 업데이트
        console.log('서버 포트 번호:', response.data);
      })
      .catch(err => console.error('포트 번호 요청 오류:', err));
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      localStorage.setItem('searchTerm', searchTerm);

      // 서버로 동적으로 받은 포트 번호를 사용해 검색 요청
      axios.get(`http://localhost:${serverPort}/ex/my/search?query=${encodeURIComponent(searchTerm)}`)
        .then(response => {
          console.log(response.data);
          window.location.href = `http://localhost:${serverPort}/ex/my/search?query=${encodeURIComponent(searchTerm)}`;
        })
        .catch(err => console.error(err));
    }
  };

  const handleLoginClick = () => {
    window.location.href = `http://localhost:${serverPort}/ex/user/main`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="header">
      <img className='header_logo' src={Logo} width='100px' height='100px' alt="Logo" />

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="검색어를 입력해주세요...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon className="header_searchIcon" onClick={handleSearchClick} />
      </div>

      <div className='header_nav'>
        <div className='header_option' onClick={handleLoginClick}>
          <span className='header_optionLineOne'>로그인/회원가입</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>
            <button className="hamburger_menu" onClick={toggleDropdown}>
              <MenuIcon />
            </button>
          </span>
          {isDropdownOpen && (
            <div className="dropdown_menu">
              <ul>
              <li><a href={`http://localhost:${serverPort}/ex/member/mypage`}>마이 페이지</a></li>
                <li><a href={`http://localhost:${serverPort}/ex/member/myorders`}>내 예약</a></li>
                <li><a href={`http://localhost:${serverPort}/ex/my/search?query=${encodeURIComponent(searchTerm)}`}>검색 하기</a></li>
                <li><a href={`http://localhost:${serverPort}/ex/map/mapService`}>지도보기</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
