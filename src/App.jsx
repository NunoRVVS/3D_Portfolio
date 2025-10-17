import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/Navbar.jsx"
import LogoSection from "./components/LogoSection.jsx"
import FeatureCards from "./components/FeatureCards.jsx"
import NewExperienceSection from "./sections/NewExperienceSection.jsx"

const App = () => {
    return (
        <>
          <NavBar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          <NewExperienceSection />
        </>
    )
}

export default App