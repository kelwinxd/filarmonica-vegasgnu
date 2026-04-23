import Footer from "../components/Footer";
import Header from "../components/Header";



export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className="bg-white w-full min-h-screen relative">
          <div className="z-400 fixed top-4 left-0 w-full flex justify-center px-8 lg:p-0">
            <Header />
          </div>
        {children}
        <Footer />
        
        </div>
    
  );
}
