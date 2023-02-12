import './App.css'
import './App_Responsive.css'
import Header from './components/Header'
import MainSection from './components/MainSection'
import BlogsComponent from './components/BlogsComponent'
import PopularSection from './components/PopularSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <BlogsComponent />
      <PopularSection />
      <Footer/>
    </div>
  )
}

export default App
