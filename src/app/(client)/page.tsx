import Footer from "../components/Footer"
import About from "../components/home/About"
import Carousel from "../components/home/Carousel"
import CarouselDepoiments from "../components/home/CarouselDepoiments"
import ContatoSection from "../components/home/ContatoSection"
import CtaFinal from "../components/home/CtaFinal"
import Depoimentos from "../components/home/Depoimentos"
import Events from "../components/home/Events"
import Header from "../components/home/Header"
import Services from "../components/home/Services"


const Home = () => {
  return (
    <div className="bg-white w-full min-h-screen relative ">
          {/* HEADER SOBREPOSTO */}
  <div className="absolute top-4 left-0 w-full z-10 flex justify-center px-8 lg:p-0">
    <Header />
  </div>
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