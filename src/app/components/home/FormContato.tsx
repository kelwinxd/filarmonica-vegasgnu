const FormContato = () => {
  return (
    <form className="flex flex-col gap-4">

      <h2 className="text-2xl md:text-3xl font-medium text-blackmain megatitle">
        Faça parte ou apoie essa iniciativa
      </h2>

      <p className="text-subparag font-medium text-sm md:text-base">
        Preencha o formulário e nossa equipe entrará em contato com você.
      </p>

      {/* Tipo */}
      <div className="flex gap-2 mt-2">
        <button
          type="button"
          className="px-3 py-1.5 lg:px-6 lg:py-3.5 border-2 border-[#D4D4D4] rounded-[6px] text-blackmain text-[12px] lg:text-[16px] btn-text font-medium cursor-pointer"
        >
          Quero ser aluno
        </button>

        <button
          type="button"
          className="px-3 py-1.5 lg:px-6 lg:py-3.5 border-2 rounded-[6px] border-[#D4D4D4] text-blackmain text-[12px] lg:text-[16px] btn-text font-medium cursor-pointer"
        >
          Quero apoiar o projeto
        </button>
      </div>

      {/* Nome */}
      <div>
        <label className="text-sm md:text-[20px] font-medium text-blackmain">Nome completo</label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "
        />
      </div>

      {/* Idade + Telefone */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="text-sm md:text-[20px] font-medium text-blackmain">Idade</label>
          <input
            type="text"
            placeholder="DD / MM / AAAA"
        className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "

          />
        </div>

        <div className="w-full">
          <label className="text-sm md:text-[20px] font-medium text-blackmain">Telefone</label>
          <input
            type="text"
            placeholder="(DDD) 00000 - 0000"
                   className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "

          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-sm md:text-[20px] font-medium text-blackmain">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
        className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "

        />
      </div>

      {/* Mensagem */}
      <div>
        <label className="text-sm md:text-[20px] font-medium text-blackmain">Mensagem (opcional)</label>
        <textarea
          placeholder="Digite sua mensagem"
        className="w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 "
 
        />
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="mt-4 bg-main text-white btn-text py-2.5 rounded-[6px] cursor-pointer hover:brightness-120"
      >
        Enviar
      </button>

    </form>
  );
};

export default FormContato;