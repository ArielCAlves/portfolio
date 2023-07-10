import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* parte 1 */}
      <div>        
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Especialização em Ciência de Dados"
            subTitle="Data Science Academy"
            result="2022"
            des="Big Data Analytics com R e Microsoft Azure Machine Learning, Engenharia de Dados com Hadoop e Spark. Business Analytics. Machine Learning. Big Data Real-Time Analytics com Python e Spark. Visualização de Dados e Design de Dashboards."
          />
          <ResumeCard
            title="Pós-Graduação em Gestão Pública"
            subTitle="Unyleya"
            result="2020"
            des="Gestão Pública e Direito Administrativo. Licitações, Contratos, Bens Públicos, Consulta de Dados Públicos."
          />
          <ResumeCard
            title="Administração de Empresas"
            subTitle="Unilasalle"
            result="2018"
            des="Aplicação de princípios e estratégias para gerenciar com eficiência, eficácia e efetividade os recursos, pessoas e processos."
          />
        </div>
      </div>

      {/* parte 2 */}
      <div>       
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Engenharia de Software"
            subTitle="Instituto de Tecnologia Infnet"
            result="Em Andamento"
            des="Aplicação de métodos e ténicas para desenvolver, projetar e manter sistemas de software de forma sistemática e eficiente, garantindo qualidade, confiabilidade e adequação às necessidades dos usuários."
          />
          <ResumeCard
            title="Estatística"
            subTitle="FMU"
            result="Em Andamento"
            des="Estudo de métodos matemáticos e estatísticos avançados para extrair insights significativos a partir de conjuntos de dados massivos, contribuindo para aprimorar o desenvolvimento de modelos preditivos, otimizar processos e embasar decisões estratégicas fundamentais em análises estatísticas robustas."
          />
          <ResumeCard
            title="Técnico em Logística"
            subTitle="Estácio de Sá (Pronatec)"
            result="2015"
            des="Supply Chain Management. Gestão da Qualidade. Prevenção de Perdas. Planejamento e Previsão de Demanda."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education