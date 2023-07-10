import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Engenheiro de Software.", "Estatístico.", "Cientista de Dados.","Empreendedor.","Entusiasta da Astronomia.","Desenvolvedor de Jogos nas horas vagas."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Seja bem-vindo (a) 🙋🏻‍♂️😁 </h4>
        <h1 className="text-6xl font-bold text-white">
          Olá, sou <span className="text-designColor capitalize">Ariel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          um <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-base font-bodyFont leading-6 tracking-wide">
        "Sou apaixonado pela experimentação e exploração, encontro inspiração na resolução de problemas complexos toda vez que mergulho em cases desafiadores.</p>
        <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-base font-bodyFont leading-6 tracking-wide">
        Minha base sólida em soluções tecnológicas e minha habilidade em análise de dados me permitem criar inovações que unem tecnologia e uma experiência aprimorada para os clientes. Movido pela busca contínua pela excelência, meu objetivo é tomar decisões cada vez melhores embasadas na interpretabilidade dos dados."</p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner