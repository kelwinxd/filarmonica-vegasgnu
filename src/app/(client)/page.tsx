import About from "../components/home/About"
import Carousel from "../components/home/Carousel"
import Header from "../components/home/Header"


const Home = () => {
  return (
    <div className="bg-white w-full min-h-screen relative ">
          {/* HEADER SOBREPOSTO */}
  <div className="absolute top-4 left-0 w-full z-10 flex justify-center px-8 lg:p-0">
    <Header />
  </div>
  <Carousel />
        <main className="max-w-full mx-auto px-5 md:px-10 lg:px-26">
        
        <About /> 
        </main>
        
    </div>
  )
}

export default Home