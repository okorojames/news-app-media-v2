import imageOne from '../images/person.webp'
import imgTwo from '../images/img_2.webp'
import imgThree from '../images/img_3.webp'
import imgFour from '../images/img_4.webp'
import imgFive from '../images/img_5.webp'
import imgSix from '../images/img_6.webp'
import imgSeven from '../images/img_7.webp'
import '../BlogsSection.css'
const BlogCard = () => {
  return (
    <div className='blogsSectionContainer'>
      {/*  */}
      <div className="blogsCard">
          <img src={imgTwo} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
          <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate">{new Date().toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
          <h3 className="blogCardH3">Your most unhappy customers are your greatest source of learning.</h3>
          <div className="cardBlogParagraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
              <p>Segell Campell</p>
              <p>CEO AND FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
         <div className="blogsCard">
          <img src={imgThree} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
          <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate">{new Date().toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
          <h3 className="blogCardH3">Your most unhappy customers are your greatest source of learning.</h3>
          <div className="cardBlogParagraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
              <p>Segell Campell</p>
              <p>CEO AND FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
         <div className="blogsCard">
          <img src={imgFour} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
          <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate">{new Date().toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
          <h3 className="blogCardH3">Your most unhappy customers are your greatest source of learning.</h3>
          <div className="cardBlogParagraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
              <p>Segell Campell</p>
              <p>CEO AND FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
         <div className="blogsCard">
          <img src={imgFive} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
          <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate">{new Date().toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
          <h3 className="blogCardH3">Your most unhappy customers are your greatest source of learning.</h3>
          <div className="cardBlogParagraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
              <p>Segell Campell</p>
              <p>CEO AND FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
         <div className="blogsCard">
          <img src={imgSix} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
          <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate">{new Date().toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
          <h3 className="blogCardH3">Your most unhappy customers are your greatest source of learning.</h3>
          <div className="cardBlogParagraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
              <p>Segell Campell</p>
              <p>CEO AND FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
         <div className="blogsCard">
          <img src={imgSeven} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
          <div className="categoryAndDate">Business, Travel &nbsp; &nbsp; <span className="categoryDate">{new Date().toLocaleDateString('en-us', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
          <h3 className="blogCardH3">Your most unhappy customers are your greatest source of learning.</h3>
          <div className="cardBlogParagraph">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
              <p>Segell Campell</p>
              <p>CEO AND FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default BlogCard