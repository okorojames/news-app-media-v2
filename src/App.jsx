import './App.css'
import './App_Responsive.css'
import Header from './components/Header'
import MainSection from './components/MainSection'
import BlogsComponent from './components/BlogsComponent'

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <BlogsComponent/>
    </div>
  )
}

export default App
