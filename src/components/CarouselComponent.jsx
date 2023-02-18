import React from 'react'
import imageOne from '../images/img_1.webp'
import imageTwo from '../images/person.webp'
import imageThree from '../images/img_6.webp'
import imageFour from '../images/img_2.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

const CarouselComponent = ({ newsData }) => {
   const readMoreStyles = {
    textDecoration:  'none',
    color: 'white',
    background: 'red',
    padding: '8px 16px',
  }

  let settings = {
        infinite: true,
        arrows:true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      };

  return (
    <div>
      <Slider {...settings}>
        {newsData.map((news)=>(    <div className="twoColContent">
          <img className="mainContentImage" src={news.image? news.image:imageFour} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate"><span className="categoryDate"> {news.publishedAt} </span></div>
            <h2 className="mainContextHeader">{news.title}</h2>
            <div className="mainContextParagraph">{news.description}
            </div>
            <div className="mainContextFooter">
              <img src={imageTwo} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>{news.source.name}</p>
                <Link to={news.url} style={readMoreStyles}>Read More</Link>
              </div>
            </div>
          </div>
      </div>))}
        </Slider>
    </div>
  )
}

export default CarouselComponent