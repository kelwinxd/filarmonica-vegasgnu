import Image from "next/image";

const About = () => {
  return (
    <div className="mt-25.5 ">

      {/* Texto */}
      <div className="w-full">
        <div className="w-[153px] h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className="text-[20px] uppercase font-medium text-[#080708] font-title">QUEM SOMOS</h1>
        </div>
  
      
      </div>

      <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-4xl text-parag">
          A Filarmônica de Metais Gnu/Vegas é um projeto social que oferece ensino gratuito de instrumentos de metais, promovendo desenvolvimento musical e humano.
        </p>
      </div>

      <div>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, perspiciatis?</p>
          <div>
            <button>Botao1</button>
             <button>Botao2</button>
          </div>
        </div>

        <div>
          {/*  Imagem */}
        </div>
      </div>



      {/* Imagem */}
     

    </div>
  );
};

export default About;