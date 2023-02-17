import './App.css'
import './App_Responsive.css'
import Header from './components/Header'
import MainSection from './components/MainSection'
import BlogsComponent from './components/BlogsComponent'
import PopularSection from './components/PopularSection'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [newsData, setNewsData] = useState([])
  async function getNewsData() {
    const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_17411635fdd843d222d2705200bfe4e4806b8')
    const data = await res.json()
    console.log(data)
    console.log(data.results)
    setNewsData(data)
  }
  useEffect(() => {
    getNewsData()
  }, [])
  return (
    <div className="App">
      <Header />
      {newsData && <MainSection newsData={newsData} />}
      {newsData && <BlogsComponent newsData={newsData} />}
      {newsData && <PopularSection newsData={newsData} />}
      <Footer/>
    </div>
  )
}

export default App
