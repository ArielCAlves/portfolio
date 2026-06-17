import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* coluna esquerda */}
      <div className="w-full">
        <div className="mt-6 lgl:mt-14 w-full mb-20 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mestrado em Modelagem Matemática e Computacional"
            subTitle="CEFET-MG"
            result="2027"
            des="Pesquisa em sistemas inteligentes aplicados à modelagem e resolução de problemas complexos. Desenvolvimento de métodos baseados em aprendizado de máquina, redes neurais, otimização e sistemas multiagentes. Aplicação de técnicas de inteligência computacional, análise probabilística e sistemas dinâmicos para apoio à tomada de decisão e construção de soluções orientadas por dados."
          />

          <ResumeCard
            title="Pós-Graduação em Engenharia de MLOps"
            subTitle="Data Science Academy em parceria com Vincit"
            result="2025"
            des="Automação do ciclo de vida de modelos de machine learning. Integração contínua e entrega contínua de modelos em produção. Monitoramento, versionamento, re-treinamento e orquestração de pipelines de machine learning para soluções escaláveis baseadas em IA."
          />

          <ResumeCard
            title="Bacharel em Estatística"
            subTitle="FMU"
            result="2025"
            des="Estudo de métodos matemáticos e estatísticos para análise de dados, modelagem preditiva, inferência, experimentação e apoio à tomada de decisão baseada em evidências."
          />

          <ResumeCard
            title="Especialização em Engenharia de Blockchain"
            subTitle="Data Science Academy"
            result="2024"
            des="Arquitetura de sistemas distribuídos e redes blockchain. Contratos inteligentes, criptografia, segurança, governança, tokenização de ativos e análise de aplicações em diferentes setores."
          />

          <ResumeCard
            title="Pós-Graduação em Gestão Pública"
            subTitle="Unyleya"
            result="2020"
            des="Gestão Pública, Direito Administrativo, licitações, contratos, bens públicos, finanças públicas e consulta de dados públicos."
          />

          <ResumeCard
            title="Técnico em Logística"
            subTitle="Estácio de Sá (Pronatec)"
            result="2015"
            des="Supply Chain Management, gestão da qualidade, prevenção de perdas, planejamento logístico e previsão de demanda."
          />
        </div>
      </div>

      {/* coluna direita */}
      <div className="w-full">
        <div className="mt-6 lgl:mt-14 w-full mb-20 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MBA em IA para Negócios"
            subTitle="PUC"
            result="2026"
            des="Modelagem preditiva aplicada aos negócios. Análise estratégica de dados para tomada de decisão. Inteligência artificial em processos corporativos. Automação inteligente, aprendizado de máquina, visão computacional e linguagem natural aplicadas à inteligência de mercado."
          />

          <ResumeCard
            title="Pós-Graduação em Sistemas Cognitivos com Agentes de IA"
            subTitle="Data Science Academy em parceria com Vincit"
            result="2025"
            des="Desenvolvimento de sistemas cognitivos baseados em agentes de IA. Aplicação de modelos inteligentes para automação, raciocínio, tomada de decisão, interação com dados e construção de soluções capazes de apoiar processos complexos de negócio."
          />

          <ResumeCard
            title="Bacharel em Engenharia de Software"
            subTitle="Instituto de Tecnologia Infnet"
            result="2025"
            des="Aplicação de métodos e técnicas para desenvolver, projetar e manter sistemas de software de forma sistemática, eficiente, confiável e alinhada às necessidades dos usuários."
          />

          <ResumeCard
            title="Especialização em Ciência de Dados"
            subTitle="Data Science Academy"
            result="2022"
            des="Big Data Analytics, Machine Learning, Engenharia de Dados com Hadoop e Spark, Business Analytics, visualização de dados, dashboards e análise de dados em tempo real com Python e Spark."
          />

          <ResumeCard
            title="Bacharel em Administração de Empresas"
            subTitle="Unilasalle"
            result="2018"
            des="Aplicação de princípios e estratégias para gerenciar recursos, pessoas, processos e operações com foco em eficiência, eficácia e geração de valor."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;