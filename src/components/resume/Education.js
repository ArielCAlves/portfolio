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
      <div className="mt-6 lgl:mt-14 w-full mb-20 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="MBA em IA para Negócios"
            subTitle="PUC"
            result="2026"
            des="Modelagem preditiva aplicada aos negócios. Análise estratégica de dados para tomada de decisão. Inteligência artificial em processos corporativos. Automação inteligente e otimização de resultados. Aprendizado de máquina em contextos empresariais. Visão computacional e linguagem natural aplicadas à inteligência de mercado. Transformação digital orientada por dados."
          />
          <ResumeCard
            title="Especialização em Engenharia de Blockchain"
            subTitle="Data Science Academy"
            result="2024"
            des="Arquitetura de sistemas distribuídos e redes blockchain. Contratos inteligentes aplicados a negócios. Criptografia e segurança em transações digitais. Soluções blockchain para finanças, supply chain, área médica, entre outras. Governança e escalabilidade em ecossistemas descentralizados. Tokenização de ativos e transformação da economia digital. Análise de casos de uso em diferentes setores."
          />          
          <ResumeCard
            title="Pós-Graduação em Gestão Pública"
            subTitle="Unyleya"
            result="2020"
            des="Gestão Pública e Direito Administrativo. Licitações, Contratos, Bens Públicos, Consulta de Dados Públicos, Finanças Públicas."
          />
          <ResumeCard
            title="Bacharel em Estatística"
            subTitle="FMU"
            result="2025"
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

      {/* parte 2 */}
      <div>       
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Pós-Graduação em Engenharia de MLOps"
            subTitle="Data Science Academy em parceria com Vincit"
            result="2025"
            des="Automação do ciclo de vida de modelos de machine learning. Integração contínua e entrega contínua de modelos em produção. Monitoramento e re-treinamento automático de modelos. Gerenciamento de dados, versionamento de modelos e pipelines de machine learning. Engenharia de confiabilidade para sistemas inteligentes. Escalabilidade e orquestração de soluções baseadas em IA."
          />
          <ResumeCard
            title="Especialização em Ciência de Dados"
            subTitle="Data Science Academy"
            result="2022"
            des="Big Data Analytics com R e Microsoft Azure Machine Learning, Engenharia de Dados com Hadoop e Spark. Business Analytics. Machine Learning. Big Data Real-Time Analytics com Python e Spark. Visualização de Dados e Design de Dashboards."
          />
          <ResumeCard
            title="Bacharel em Engenharia de Software"
            subTitle="Instituto de Tecnologia Infnet"
            result="2025"
            des="Aplicação de métodos e ténicas para desenvolver, projetar e manter sistemas de software de forma sistemática e eficiente, garantindo qualidade, confiabilidade e adequação às necessidades dos usuários."
          />     
          <ResumeCard
            title="Bacharel em Administração de Empresas"
            subTitle="Unilasalle"
            result="2018"
            des="Aplicação de princípios e estratégias para gerenciar com eficiência, eficácia e efetividade os recursos, pessoas e processos."
          />            
        </div>
      </div>
    </motion.div>
  );
}

export default Education