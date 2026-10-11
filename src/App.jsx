import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero Section/Hero'
import Skill from './Components/skills/Skill'
import Courses from './Components/Courses/Courses'
import FloatingImgs from './Components/FloatingImgs/FloatingImgs'
import CardBackground from './Components/cardBackground/cardBackground'
import LastCard from './Components/LastCard/LastCard'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <Courses />
      <FloatingImgs />
      <CardBackground />
      <LastCard />
    </>
  )
}

export default App


