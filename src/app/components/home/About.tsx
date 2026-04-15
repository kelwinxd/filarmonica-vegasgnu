import Image from "next/image";
import Button from "./Button";
import AboutCard from "./AboutCard";
import CarouselInstruments from "./CarouselInstruments";

const About = () => {
  return (
    <div className="mt-25.5 ">

      {/* Texto Quem Somos */}
      <div className="w-full">
        <div className="w-[153px] h-[39px] p-2.5 bg-[#CDE8FF] flex justify-center items-center">
      <h1 className=" text-[15px] uppercase font-medium text-[#080708] megatitle">QUEM SOMOS</h1>
        </div>
  
      
      </div>
      {/* Quem Somos */}
      <div className="flex gap-[41px] mt-[46px]">
        <img src="/arrow.png" alt="" className="h-[34px] mt-2" />
        <p className="text-3xl md:text-4xl text-parag">
          A Filarmônica de Metais Gnu/Vegas é um projeto social que oferece ensino gratuito de instrumentos de metais, promovendo desenvolvimento musical e humano.
        </p>
      </div>

        {/* Story */}
        <div className="mt-[72px] flex flex-col md:flex-row gap-6 ">
          <div className="flex-1 ">
            <p className="text-subparag text-[20px] font-medium">Fundado em junho de 2022, o projeto nasceu da parceria entre o Espaço Gnu e a Vegas Card, com o objetivo de ampliar o acesso à educação musical e gerar impacto social por meio da cultura. Ao longo de sua atuação, a iniciativa vem se consolidando como um espaço de aprendizado, inclusão e desenvolvimento, atendendo crianças, adolescentes e adultos em um ambiente estruturado e acolhedor</p>

            <div className="flex flex-col md:flex-row gap-6 mt-[35px]">
              <Button variant="secondary" text="dark" border="outline">
                Quero ser Parceiro
              </Button>
              <Button variant="primary" text="light">
                Quero me inscrever
              </Button>
            </div>
          </div>

          <div className="flex-1 relative min-h-[320px] h-[320px] md:h-[380px]">
            {/*  Imagem */}
            <Image src="/aboutimg.png" className="object-cover rounded-[8px]" fill alt="imagem about" />
          </div>
        </div>

        {/* About Cards */}
        <div className="mt-[120px]  mb-[120px] flex flex-col md:flex-row gap-6">
          <AboutCard title="+100">
            <h2 className="text-[16px] md:text-[20px] text-main font-bold">
              Alunos atendidos
            </h2>
            <p className="text-subparag text-[16px] md:text-[20px] leading-6 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dolor.
            </p>
          </AboutCard>

            <AboutCard title="+2 Anos">
          <h2 className="text-[16px] md:text-[20px] text-main font-bold">
              Alunos atendidos
            </h2>
            <p className="text-subparag text-[16px] md:text-[20px] leading-6 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dolor.
            </p>
          </AboutCard>

            <AboutCard title="+50">
            <h2 className="text-[16px] md:text-[20px] text-main font-bold">
              Alunos atendidos
            </h2>
            <p className="text-subparag text-[16px] md:text-[20px] leading-6 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dolor.
            </p>
          </AboutCard>

            <AboutCard title="100%">
            <h2 className="text-[16px] md:text-[20px] text-main font-bold">
              Alunos atendidos
            </h2>
            <p className="text-subparag text-[16px] md:text-[20px] leading-6 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dolor.
            </p>
          </AboutCard>
        </div>

     






      
     

    </div>
  );
};

export default About;