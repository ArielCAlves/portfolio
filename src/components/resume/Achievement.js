import React from "react";
import { motion } from "framer-motion";
import ResumeCardImg from "./ResumeCardImg";
import {azure, nasa, olimpiada, banner } from "../../assets/index";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-10 md:flex-row"
    >
      <div className="flex-1">        
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardImg
            title="Microsoft Certified: Azure Data Scientist Associate (2023)"
            img={azure}
            result="2023"
            des="Azure, Machine Learning, Deep Learning, MLOps"
            downloadLink={"https://www.credly.com/badges/f338ac1b-08dd-43c8-a811-93d3fdbfd137/linked_in?t=rvlhhk"}
          />
          <ResumeCardImg
            title="Olimpíada Brasileira de Astronomia e Astronáutica"
            img={olimpiada}
            result="2005"
            des="Primeiros contatos com a comunidade científica brasileira. Construção do pensamento analítico. Paixão pela ciência e exploração espacial"
            downloadLink={"https://drive.google.com/file/d/197jxzid227fUR0Ugz_G_9CkUWoEtPJmt/view"}
          />          
        </div>
      </div>
      <div className="flex-1">        
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardImg
            title=" NASA - International Space Apps Challenge"
            img={nasa}
            result="2020"
            des="Identificação de incêndio, Machine Learning, Processamento de Imagem."
            downloadLink="https://drive.google.com/file/d/1mJdINd3_avdfTc08R_NcMQGSvNvArxLX/view?usp=sharing"
          />
          <ResumeCardImg
            title="Canal no Youtube"
            img={banner}
            result="Em Construção"
            des="Playlist sobre Análise de Dados. Vídeos sobre construção de carreira. Vídeos sobre projetos."
            downloadLink={"https://www.youtube.com/channel/UCkHdFEAJNBovWDkxbPbsuAg"}
          />          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
