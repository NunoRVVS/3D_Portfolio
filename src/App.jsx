import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import NavBar from "./components/Navbar.jsx"
import LogoSection from "./sections/LogoSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import NewExperienceSection from "./sections/NewExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"

const App = () => {
    return (
        <>
          <NavBar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          <NewExperienceSection />
          <TechStack />
        </>
    )
}

export default App