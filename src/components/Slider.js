import React, { Component } from 'react';
import Slider from 'react-slick';
import '../css/ImageSlider.css'; // 스타일을 별도로 추가합니다.
import sample1 from "../img/sample1.jpg"
import sample2 from "../img/sample2.jpg"
import sample3 from "../img/sample3.jpg"

export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={sample1} alt="Sample 1" className="slider-image" />
            <div className="ad-text">최고의 품질을 경험하세요!</div>
          </div>
          <div className="slide">
            <img src={sample2} alt="Sample 2" className="slider-image" />
            <div className="ad-text">지금 바로 할인 혜택을 받아보세요!</div>
          </div>
          <div className="slide">
            <img src={sample3} alt="Sample 3" className="slider-image" />
            <div className="ad-text">한정된 시간 동안만 제공됩니다!</div>
          </div>
        </Slider>
      </div>
    );
  }
}
