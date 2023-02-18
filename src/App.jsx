import './App.css'
import './App_Responsive.css'
import Header from './components/Header'
import MainSection from './components/MainSection'
import BlogsComponent from './components/BlogsComponent'
import PopularSection from './components/PopularSection'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [newsData, setNewsData] = useState([])
  async function getNewsData() {
    const res = await fetch('https://gnews.io/api/v4/search?q=example&apikey=bbd4b0414fbc6f900b187b1f042bfa6e')
    const data = await res.json()
    setNewsData(data.articles)
  }
  useEffect(() => {
    getNewsData()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      {newsData && <MainSection newsData={newsData} />}
      {newsData && <BlogsComponent newsData={newsData} />}
      {newsData && <PopularSection newsData={newsData} />}
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
