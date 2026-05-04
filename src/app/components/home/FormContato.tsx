"use client"

import { useState } from "react";

const WHATSAPP_NUMBER = "5519993723677";

function buildWhatsAppURL(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const inputClass =
  "w-full mt-1 text-subparag bg-white border-2 border-[#D4D4D4] rounded-[6px] px-3 py-2 focus:outline-none focus:border-[#084B83] transition-colors";

const FormContato = () => {
  const [serAluno, setSerAluno] = useState(true);

  // Campos - Tenho Interesse
  const [iNome, setINome] = useState("");
  const [iIdade, setIIdade] = useState("");
  const [iTelefone, setITelefone] = useState("");
  const [iEmail, setIEmail] = useState("");
  const [iInstrumento, setIInstrumento] = useState("");
  const [iMensagem, setIMensagem] = useState("");

  // Campos - Quero Apoiar
  const [aNome, setANome] = useState("");
  const [aTelefone, setATelefone] = useState("");
  const [aEmail, setAEmail] = useState("");
  const [aInstrumento, setAInstrumento] = useState("");
  const [aMensagem, setAMensagem] = useState("");

  const selected = "bg-[#CDE8FF] border-2 border-[#084B83]";
  const notSelected = "bg-[#F8F8F8] border-2 border-[#D4D4D4]";

  const instrumentOptions = [
    { value: "", label: "Prefiro não especificar" },
    { value: "Trompete", label: "Trompete" },
    { value: "Trombone", label: "Trombone" },
    { value: "Trompa", label: "Trompa" },
    { value: "Bombardino", label: "Bombardino" },

  ];

  const handleSubmitInteresse = () => {
    const msg = [
      `[Tenho Interesse]`,
      ``,
      `Nome: ${iNome || "Não informado"}`,
      `Idade: ${iIdade || "Não informado"}`,
      `Telefone: ${iTelefone || "Não informado"}`,
      `Email: ${iEmail || "Não informado"}`,
      `Instrumento de interesse: ${iInstrumento || "Não especificado"}`,
      `Mensagem: ${iMensagem || "—"}`,
    ].join("\n");

    window.open(buildWhatsAppURL(msg), "_blank");
  };

  const handleSubmitApoio = () => {
    const msg = [
      `[Quero apoiar o projeto]`,
      ``,
      `Empresa/Escola: ${aNome || "Não informado"}`,
      `Telefone: ${aTelefone || "Não informado"}`,
      `Email: ${aEmail || "Não informado"}`,
      `Instrumento de interesse: ${aInstrumento || "Não especificado"}`,
      `Mensagem: ${aMensagem || "—"}`,
    ].join("\n");

    window.open(buildWhatsAppURL(msg), "_blank");
  };

  return (
    <div className="flex flex-col gap-4" id="forms">
      <h2 className="text-2xl md:text-3xl font-medium text-blackmain megatitle">
        Faça parte ou apoie essa iniciativa
      </h2>

      <p className="text-subparag font-medium text-sm md:text-base">
        Preencha o formulário e nossa equipe entrará em contato com você.
      </p>

      {/* Tipo */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setSerAluno(true)}
          type="button"
          className={`${serAluno ? selected : notSelected} px-3 py-1.5 lg:px-6 lg:py-3.5 rounded-[6px] text-blackmain text-[12px] lg:text-[16px] btn-text font-medium cursor-pointer`}
        >
          Tenho Interesse
        </button>
        <button
          onClick={() => setSerAluno(false)}
          type="button"
          className={`${serAluno ? notSelected : selected} px-3 py-1.5 lg:px-6 lg:py-3.5 rounded-[6px] text-blackmain text-[12px] lg:text-[16px] btn-text font-medium cursor-pointer`}
        >
          Quero apoiar o projeto
        </button>
      </div>

      {/* ===== FORM: TENHO INTERESSE ===== */}
      {serAluno && (
        <>
          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              value={iNome}
              onChange={(e) => setINome(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm md:text-[20px] font-medium text-blackmain">
                Idade
              </label>
              <input
                type="text"
                placeholder="Ex: 25"
                value={iIdade}
                onChange={(e) => setIIdade(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="w-full">
              <label className="text-sm md:text-[20px] font-medium text-blackmain">
                Telefone
              </label>
              <input
                type="text"
                placeholder="(DDD) 00000-0000"
                value={iTelefone}
                onChange={(e) => setITelefone(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={iEmail}
              onChange={(e) => setIEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Instrumento de interesse
            </label>
            <select
              value={iInstrumento}
              onChange={(e) => setIInstrumento(e.target.value)}
              className={inputClass}
            >
              {instrumentOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Mensagem (opcional)
            </label>
            <textarea
              placeholder="Digite sua mensagem"
              value={iMensagem}
              onChange={(e) => setIMensagem(e.target.value)}
              className={inputClass}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmitInteresse}
            className="mt-4 bg-main text-white btn-text py-2.5 rounded-[6px] cursor-pointer hover:brightness-125"
          >
            Enviar pelo WhatsApp
          </button>
        </>
      )}

      {/* ===== FORM: QUERO APOIAR ===== */}
      {!serAluno && (
        <>
          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Nome da empresa/escola
            </label>
            <input
              type="text"
              placeholder="Digite o nome da empresa ou escola"
              value={aNome}
              onChange={(e) => setANome(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Telefone
            </label>
            <input
              type="text"
              placeholder="(DDD) 00000-0000"
              value={aTelefone}
              onChange={(e) => setATelefone(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={aEmail}
              onChange={(e) => setAEmail(e.target.value)}
              className={inputClass}
            />
          </div>

  

          <div>
            <label className="text-sm md:text-[20px] font-medium text-blackmain">
              Mensagem (opcional)
            </label>
            <textarea
              placeholder="Digite sua mensagem"
              value={aMensagem}
              onChange={(e) => setAMensagem(e.target.value)}
              className={inputClass}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmitApoio}
            className="mt-4 bg-main text-white btn-text py-2.5 rounded-[6px] cursor-pointer hover:brightness-125"
          >
            Enviar pelo WhatsApp
          </button>
        </>
      )}
    </div>
  );
};

export default FormContato;