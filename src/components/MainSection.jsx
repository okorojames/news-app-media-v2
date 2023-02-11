import '../mainSection.css'
import imageOne from '../images/imgone.webp'
const MainSection = () => {
  return (
    <div className="mainSectionContainer">
      <div className="mainContentFirstContext">Trending</div>
      <div className="mainSectionSecondContent">
        <div className="twoColContent">
          <img className="mainContentImage" src={imageOne} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainSection