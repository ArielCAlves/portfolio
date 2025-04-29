import React from "react";
import { motion } from "framer-motion";
import ResumeCardImg from "./ResumeCardImg";
import {azure, nasa, olimpiada, banner, nasa_2023, duke_university } from "../../assets/index";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-10 md:flex-row"
    >
      <div className="flex-1">        
        <div className="mt-14 w-full h-[1300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCardImg
            title="Data Cloud Engineering"
            img={duke_university}
            des="Certificado Internacional da FMU em parceria com a Duke University."
            downloadLink={"https://drive.google.com/file/d/1f7wqECF8CGuGpMEJksPw0DStrk6nG_os/view?usp=drive_link"}
          />          
          <ResumeCardImg
            title="Olimpíada Brasileira de Astronomia e Astronáutica"
            img={olimpiada}
            des="Medalhista Olímpico em Física, Astronomia e Astronáutica. Primeiros contatos com a comunidade científica brasileira há mais de 20 anos. Construção do pensamento analítico. Paixão pela ciência e exploração espacial."
            downloadLink={"https://drive.google.com/file/d/197jxzid227fUR0Ugz_G_9CkUWoEtPJmt/view"}
          /> 
          <ResumeCardImg
            title="Canal do Youtube"
            img={banner}  
            des="Canal dedicado à democratização do conhecimento na área de Dados & IA para construção da carreira com playlists técnicas e assuntos relevantes do mercado."
            downloadLink={"https://www.youtube.com/@arielcarvalhodados"}
          />                
        </div>
      </div>
      <div className="flex-1">        
        <div className="mt-14 w-full h-[1200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCardImg
            title="Microsoft Certified: Azure Data Scientist Associate (2023)"
            img={azure}
            des="Azure, Machine Learning, Deep Learning, MLOps."
            downloadLink={"https://www.credly.com/badges/f338ac1b-08dd-43c8-a811-93d3fdbfd137/linked_in?t=rvlhhk"}
          />
        <ResumeCardImg
            title=" NASA - Space Challenge 2023"
            img={nasa_2023}
            des="Deep Learning aplicado à Astrofísica, mais precisamente a estudos sobre o magnetismo solar para identificar anomalias (outliers) que possam afetar redes elétricas, satélites, telecomunicações, aviação e GPS a partir de dados que são coletados do DSCOVR (Deep Space Climate Observatory) que está no Point 1 de Lagrange (entre o sol e nosso planeta)."
            downloadLink="https://drive.google.com/file/d/1sf8cKaGx9uCvJ9SUKB27tfym-YCrV65e/view?usp=sharing"
          />
          <ResumeCardImg
            title=" NASA - International Space Apps Challenge"
            img={nasa}
            des="Previsão de focos de incêndio, Machine Learning, Geoprocessamento, Processamento de Imagem."
            downloadLink="https://drive.google.com/file/d/1mJdINd3_avdfTc08R_NcMQGSvNvArxLX/view?usp=sharing"
          />             
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
