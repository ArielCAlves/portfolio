import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail,SiYoutube,SiWhatsapp } from "react-icons/si";
import {logo} from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" style={{ maxWidth: '200px', maxHeight: '80px' }}/>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />              
                <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-sm text-gray-400 mt-2">
                "Sou apaixonado pela experimentação e exploração, encontro inspiração na resolução de problemas complexos toda vez que mergulho em cases desafiadores. </p>
                <p style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="text-sm text-gray-400 mt-2">
                Minha base sólida em soluções tecnológicas e minha habilidade em análise de dados me permitem criar inovações que unem tecnologia e uma experiência aprimorada para os clientes. Movido pela busca contínua pela excelência, meu objetivo é tomar decisões cada vez melhores embasadas na interpretabilidade dos dados."</p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Entre em contato
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar