import React from 'react'
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiFlask,SiGithub,SiGmail,SiPython,SiYoutube,SiWhatsapp,SiR,SiPowerbi } from "react-icons/si";
const Media = () => {
  return (
    <div>
        <div>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            <br/>
            Principais Stacks
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiPython />
            </span>                        
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiFlask />
            </span>
            <span className="bannerIcon">
              <SiR />
            </span>  
            <span className="bannerIcon">
              <SiPowerbi />
            </span>                       
          </div>
        </div>
      </div>
  )
}

export default Media