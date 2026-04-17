import FormContato from "./FormContato";
import Image from "next/image";

const ContatoSection = () => {
  return (
    <section className="w-full mb-[60px]" id="forms">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row rounded-[8px] overflow-hidden">

        {/* Imagem */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
          <Image
            src="/meninotocando.png"
            alt="Menino tocando instrumento"
            fill
            className="object-cover"
          />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-1/2 bg-[#F1F1F1] p-6 md:p-10">
          <FormContato />
        </div>

      </div>
    </section>
  );
};

export default ContatoSection;