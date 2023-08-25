import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>       
        <div style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="mt-14 w-full h-[1300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">          
        <ResumeCard
            title="Cientista de Dados | Consultor de BI"
            subTitle="Autônomo"
            result="2022-Atual"
            des="Atua com transformação de dados em seu estado mais bruto (estruturados e não-estruturados) vindos de diversas fontes para transformá-los em inteligência de negócio. Além da construção de modelos de Machine Learning para classificação (se o cliente vai comprar ou não e quais os principais fatores), previsão de receita/demanda, segmentação de clientes/produtos, otimizações de mix de produtos e avaliações das principais métricas."
          />
          <ResumeCard
            title="Analista de Dados"
            subTitle="Nelogica Sistemas de Software"
            result="2022-2023"
            des="Atuou com coleta e limpeza de dados de diversas bases (banco de dados, planilhas e APIs) e criou métricas a fim de disponibilizá-las por meio de dashboards gerenciais e executivos que foram utilizados para extrair insights. Também foi responsável pela construção de modelos preditivos utilizando algoritmos de Machine Learning para melhorar a qualidade da experiência do cliente."
          />
          <ResumeCard
            title="Desenvolvedor Backend"
            subTitle="Lym Tech"
            result="2021"
            des="Automatizou processos e contribuiu na construção de uma plataforma de CRM e ERP. Também atuou com detecção de fraudes com ferramentas robustas para consulta utilizando algoritmos associados a base de dados e aplicação de análises estatísticas."
          />     
          <ResumeCard
            title="Estagiário"
            subTitle="Procuradoria Federal - AGU"
            result="2010-2012"
            des="Atuou no setor de Execução Fiscal utilizando sistemas do Banco Central e da Receita Federal a partir de decisões judiciais. Contribuiu com a transformação digital, organização de planilhas e análise processual."
          />       
        </div>     
      </div>
      <div>
        <div style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Cientista de Dados"
            subTitle="AppIA"
            result="03/2023 - 08/2023"
            des="Atuou, principalmente, com pesquisa e construção de modelos para solucionar
            problemas relacionados à Previsão de Demanda (ênfase em Séries Temporais)
            utilizando estatística avançada e econometria, além do máximo de poder
            computacional de cada máquina disponível de acordo com a situação mantendo a
            escalabilidade e disponibilidade dos modelos gerados."
          />          
          <ResumeCard            
            title="Especialista em TI"
            subTitle="Verde Agritech"
            result="2021-2022"
            des="Atuou, maior parte do tempo, com extração e limpeza de dados de diversas bases para lapidá-los e transformá-los em insight a diversos setores utilizando análises estatísticas e entendimento de negócio. Automatizou processos para otimizar recursos e criou um Data Lake capaz de integrar dados de sistemas diferentes e disponibilizá-los para tomada de decisões. Foi responsável pela construção de um modelo capaz de segmentar os clientes e identificar os principais fatores que levaram um evento a ocorrer e criar um plano de ação efetivo."
          />
          <ResumeCard
            title="CTO"
            subTitle="Alves Consultoria Imobiliária"
            result="2015-2019"
            des="Atuou na captação e retenção de clientes analisando indicadores para tomada de decisões, elaborou modelo de negócios e prestação de consultorias a fim de não ser apenas um intermediador, mas sim agregar valor e gerar um diferencial competitivo mediante o mercado; além de ter fechado parcerias com stakeholders estratégicos (nacionais e internacionais)."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
