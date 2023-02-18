import PopularSectionCarousel from "./PopularSectionCarousel"
const PopularSection = ({newsData}) => {
  return (
    <div className="popularSectionContainer">
      <div className="popularSectionFirstContext">Popular</div>
      {newsData && <PopularSectionCarousel newsData={newsData} />}
    </div>
  )
}

export default PopularSection