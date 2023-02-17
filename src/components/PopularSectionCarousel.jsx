import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import personImage from '../images/person.webp'
import imageOne from '../images/img_2.webp'
import imageTwo from '../images/img_3.webp'
import imageThree from '../images/img_4.webp'
import imageFour from '../images/img_5.webp'
import imageFive from '../images/img_6.webp'
import imageSix from '../images/img_6.webp'
const PopularSectionCarousel = (newsData) => {
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
           <div className="twoColContent">
          <img className="mainContentImage" src={imageTwo} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate"> - {new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })}</span></div>
            <h2 className="mainContextHeader">Your most unhappy customers are your greatest source of learning.</h2>
            <div className="mainContextParagraph">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </div>
            <div className="mainContextFooter">
              <img src={personImage} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>Segell Campell</p>
                <p>CEO AND FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
           <div className="twoColContent">
          <img className="mainContentImage" src={imageThree} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate"> - {new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })}</span></div>
            <h2 className="mainContextHeader">Your most unhappy customers are your greatest source of learning.</h2>
            <div className="mainContextParagraph">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </div>
            <div className="mainContextFooter">
              <img src={personImage} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>Segell Campell</p>
                <p>CEO AND FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
           <div className="twoColContent">
          <img className="mainContentImage" src={imageOne} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate"> - {new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })}</span></div>
            <h2 className="mainContextHeader">Your most unhappy customers are your greatest source of learning.</h2>
            <div className="mainContextParagraph">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </div>
            <div className="mainContextFooter">
              <img src={personImage} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>Segell Campell</p>
                <p>CEO AND FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
           <div className="twoColContent">
          <img className="mainContentImage" src={imageFive} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate"> - {new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })}</span></div>
            <h2 className="mainContextHeader">Your most unhappy customers are your greatest source of learning.</h2>
            <div className="mainContextParagraph">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </div>
            <div className="mainContextFooter">
              <img src={personImage} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>Segell Campell</p>
                <p>CEO AND FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
           <div className="twoColContent">
          <img className="mainContentImage" src={imageFour} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate"> - {new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })}</span></div>
            <h2 className="mainContextHeader">Your most unhappy customers are your greatest source of learning.</h2>
            <div className="mainContextParagraph">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </div>
            <div className="mainContextFooter">
              <img src={personImage} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>Segell Campell</p>
                <p>CEO AND FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
           <div className="twoColContent">
          <img className="mainContentImage" src={imageSix} alt="" />
          <div className="mainContentContext">
            <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate"> - {new Date().toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' })}</span></div>
            <h2 className="mainContextHeader">Your most unhappy customers are your greatest source of learning.</h2>
            <div className="mainContextParagraph">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </div>
            <div className="mainContextFooter">
              <img src={personImage} className="mainContextFooterImage" style={{width: '60px', borderRadius: '50%'}} />
              <div className="mainContextFooterParagraph">
                <p>Segell Campell</p>
                <p>CEO AND FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </Slider>
    </div>
  )
}

export default PopularSectionCarousel