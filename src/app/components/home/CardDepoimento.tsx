import Image from "next/image";

type CardDepoimentoProps = {
  text: string;
  name: string;
  role: string;
  avatar: string;
};

const CardDepoimento = ({
  text,
  name,
  role,
  avatar,
}: CardDepoimentoProps) => {
  return (
    <div className="bg-[#ffffff] rounded-lg border-1 border-gray-200 p-6 flex flex-col justify-between h-full">

      {/* Aspas */}
      <div className="mb-4">
        <Image
          src="/aspasdepo.png" // sua imagem de aspas
          alt="aspas"
          width={64}
          height={64}
          className="w-[64px] h-[64px]"
        />
      </div>

      {/* Texto */}
      <p className="text-subparag font-medium text-[18px] leading-5 mb-6">
        {text}
      </p>

      {/* Linha */}
      <div className="h-[1px] bg-gray-200 mb-4" />

      {/* Usuário */}
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover w-[64px] h-[64px]"
        />

        <div>
          <p className="text-[16px] font-medium text-blackmain megatitle">
            {name}
          </p>
          <span className="text-[16px] font-medium text-subparag">
            {role}
          </span>
        </div>
      </div>

    </div>
  );
};

export default CardDepoimento;