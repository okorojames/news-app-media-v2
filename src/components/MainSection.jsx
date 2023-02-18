import CarouselComponent from './CarouselComponent'

const MainSection = ({newsData}) => {
  return (
    <div className="mainSectionContainer">
      <div className="mainContentFirstContext" style={{marginBottom: '60px'}}>Trending</div>
      {/* <div data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'> */}
        {newsData && <CarouselComponent  newsData={newsData}/>}
      {/* </div> */}
    </div>
  )
}

export default MainSection