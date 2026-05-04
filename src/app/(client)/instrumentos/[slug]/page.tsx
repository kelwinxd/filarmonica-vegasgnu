import { instrumentos } from "@/app/data/instrumentsData";
import Image from 'next/image'


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  console.log(slug)

  const instrumento = instrumentos.find(
    (item) => item.slug === slug
  );

  if (!instrumento) {
    return <div>Instrumento não encontrado</div>;
  }

  return (
    <>
    <div className="w-full bg-black overflow-hidden">

    
      <div className=" relative w-full h-[400px] md:h-[500px] overflow-hidden">
  {instrumento.videos && (
    <iframe
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[56.25vw] min-h-full min-w-[177.78vh] scale-125"
      src={`${instrumento.videos.replace(
        "watch?v=",
        "embed/"
      )}?autoplay=1&mute=0&controls=1&loop=1&playlist=${instrumento.videos
        .split("watch?v=")[1]}&modestbranding=1&rel=0&playsinline=1`}
      allow="autoplay"
      allowFullScreen
    />
  )}

  <div className="absolute inset-0 bg-black/50 pointer-events-none" />
</div>
</div>
 <div className=" px-5 md:px-10 lg:px-26 h-[500px]">
  
      <div className=" py-6 text-blackmain">
      <h1 className="text-2xl font-bold">{instrumento.nome}</h1>
      <p className="mt-2">{instrumento.descricaoLonga}</p>
      </div>
      <h3 className="text-black">OBS: Site em Construção, esperando mais informações. Foi usado o mesmo vídeo para as páginas, como exemplo</h3>

    </div>
    </>
   
  );
}