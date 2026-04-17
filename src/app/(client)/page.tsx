import Footer from "../components/Footer"
import About from "../components/home/About"
import Carousel from "../components/home/Carousel"
import CarouselDepoiments from "../components/home/CarouselDepoiments"
import ContatoSection from "../components/home/ContatoSection"
import CtaFinal from "../components/home/CtaFinal"
import Depoimentos from "../components/home/Depoimentos"
import Events from "../components/home/Events"
import Header from "../components/Header"
import Services from "../components/home/Services"


const Home = () => {
  return (
    <div>
          {/* HEADER SOBREPOSTO */}

  <Carousel />
  <Events  />
        <main className="max-w-full overflow-x-hidden mx-auto">
        
        <About /> 
        
        <Services />
        <ContatoSection />
        
        </main>
        <CarouselDepoiments />
        <Depoimentos />
        <CtaFinal />
        
        
    </div>
  )
}

export default Home