import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail,SiYoutube,SiWhatsapp } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Ariel Carvalho Alves</h3>
        <p className="text-lg font-normal text-gray-400">
          Cientista de Dados
        </p>
        <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-sm text-gray-400 tracking-wide">
        "Sou apaixonado pela experimentação e exploração, encontro inspiração na resolução de problemas complexos toda vez que mergulho em cases desafiadores. </p>
        <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-sm text-gray-400 tracking-wide">
        Minha sm sólida em soluções tecnológicas e minha habilidade em análise de dados me permitem criar inovações que unem tecnologia e uma experiência aprimorada para os clientes. Movido pela busca contínua pela excelência, meu objetivo é tomar decisões cada vez melhores embasadas na interpretabilidade dos dados."</p>
        
        <p className="text-sm text-gray-400 flex items-center gap-2">
          Telefone: <span className="text-lightText">(21) 99540-6940</span>
        </p>
        <p className="text-sm text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ariel@julioalves.adv.br</span>
        </p>
        <p className="text-sm text-gray-400 flex items-center gap-2">
          Github: <span className="text-lightText">https://github.com/ArielCAlves</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-sm uppercase font-titleFont mb-4">Entre em contato</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/ArielCAlves" target="_blank" rel="noopener noreferrer">
            <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:ariel@julioalves.adv.br">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ariel-alves/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>   
          <span className="bannerIcon">
          <a href="https://www.youtube.com/@arielcarvalhodados" target="_blank" rel="noopener noreferrer">
            <SiYoutube /></a>
          </span>  
          <span className="bannerIcon">
          <a href="https://api.whatsapp.com/send?phone=21995406904&text=%20Ol%C3%A1,%20tudo%20bem?" target="_blank" rel="noopener noreferrer">
            <SiWhatsapp /></a>
          </span>         
        </div>
      </div>
    </div>
  );
}

export default ContactLeft