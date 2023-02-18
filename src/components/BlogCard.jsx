import imageOne from '../images/person.webp'
import imgSeven from '../images/img_7.webp'
import '../BlogsSection.css'
import {Link} from 'react-router-dom'
const BlogCard = ({ newsData }) => {
  const readMoreStyles = {
    textDecoration:  'none',
    color: 'white',
    background: 'red',
    padding: '8px 16px',
  }
  console.log(newsData)
  return (
    <div className='blogsSectionContainer'>

      {newsData.map((news) => (
        <div className="blogsCard">
          <img src={news.image? news.image:imgSeven} alt="blog card image" className="blogsCardImg" />
        <div className="blogsCardContext">
            <div className="categoryAndDate"><span className="categoryDate">{news.publishedAt}</span></div>
            <h3 className="blogCardH3">{news.title}</h3>
            <div className="cardBlogParagraph">{news.description}</div>
          <div className="blogCardFooter">
            <img src={imageOne} alt="" style={{ width: '50px', borderRadius: '50%' }} />
            <div className="mainContextFooterParagraph" style={{fontSize: '16px'}}>
                <p>{news.source.name}</p>
                <Link to={news.url} style={readMoreStyles}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
))}
    </div>
  )
}

export default BlogCard