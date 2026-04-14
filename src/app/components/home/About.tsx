import Image from "next/image";

const About = () => {
  return (
    <div className="mt-25.5 ">

      {/* Texto */}
      <div className="w-full">
        <div className="w-[153px] h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">QUEM SOMOS</h1>
        </div>
  
      
      </div>

      <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-4xl text-parag">
          A Filarmônica de Metais Gnu/Vegas é um projeto social que oferece ensino gratuito de instrumentos de metais, promovendo desenvolvimento musical e humano.
        </p>
      </div>

      <div className="mt-[72px] flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="text-subparag text-[20px] font-medium">Fundado em junho de 2022, o projeto nasceu da parceria entre o Espaço Gnu e a Vegas Card, com o objetivo de ampliar o acesso à educação musical e gerar impacto social por meio da cultura. Ao longo de sua atuação, a iniciativa vem se consolidando como um espaço de aprendizado, inclusão e desenvolvimento, atendendo crianças, adolescentes e adultos em um ambiente estruturado e acolhedor</p>
          <div>
            <button>Botao1</button>
             <button>Botao2</button>
          </div>
        </div>

        <div className="flex-1">
          {/*  Imagem */}
          <Image src="/aboutimg.png"  width={588} height={320} alt="imagem about" />
        </div>
      </div>



      {/* Imagem */}
     

    </div>
  );
};

export default About;