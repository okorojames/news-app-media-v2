import CarouselComponent from './CarouselComponent'

const MainSection = () => {
  return (
    <div className="mainSectionContainer">
      <div className="mainContentFirstContext" style={{marginBottom: '60px'}}>Trending</div>
      {/* <div data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'> */}
        <CarouselComponent />
      {/* </div> */}
    </div>
  )
}

export default MainSection