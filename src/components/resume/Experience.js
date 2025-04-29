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
      <div style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="mt-14 w-full mb-22 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">          
        <ResumeCard
            title="Cientista de Dados"
            subTitle="Daniel Law"
            result="2023-Atual"
            des="Atua na construção de modelos preditivos e estatísticos avançados, fundamentados em pesquisa acadêmica e literatura científica especializada. Desenvolveu projetos de previsão de séries temporais que aumentaram a precisão das projeções financeiras, modelos de churn que reduziram significativamente a perda de clientes, segmentação avançada que ampliou oportunidades de negócio, e análises de mercado que impulsionaram estratégias bem- sucedidas de expansão. Implementa modelos em produção utilizando práticas de MLOps, desenvolve Feature Stores e conduz análises econômicas especializadas no setor de propriedade intelectual, com abrangência nacional e internacional. Além disso, constrói agentes inteligentes com uso de LLMs e outras arquiteturas Transformers, otimizando processos internos e aprimorando a qualidade das decisões estratégicas."
          />        
          <ResumeCard
            title="Cientista de Dados"
            subTitle="Appia"
            result="Abril a Agosto de 2023"
            des="Atuou no desenvolvimento de modelos para previsão de demanda, com foco em séries temporais, aplicando métodos avançados de estatística e econometria para previsão de demanda e precificação. Utilizou plenamente o poder computacional disponível em cada máquina, garantindo a escalabilidade, eficiência e alta disponibilidade dos modelos gerados."
          />
          <ResumeCard
            title="Cientista de Dados"
            subTitle="Verde Agritech"
            result="2021 - 2022"
            des="Atuou na coleta, tratamento e análise estratégica de dados provenientes de múltiplas bases, utilizando técnicas estatísticas avançadas aliadas ao profundo entendimento de negócio para geração de insights relevantes. Automatizou processos operacionais para otimizar recursos e desenvolveu um Data Lake integrado, possibilitando a centralização e disponibilização ágil de informações para tomadas de decisão. Foi responsável pela criação de modelos que segmentaram clientes de maneira precisa e identificaram fatores críticos associados à ocorrência de eventos, resultando em planos de ação eficazes e orientados por dados."
          />     
          <ResumeCard
            title="Consultor de Dados"
            subTitle="Consultoria"
            result="2019-2021"
            des="Auxiliou empresas na definição de KPIs, estruturação de pipelines de dados, desenvolvimento de dashboards e modelos preditivos, com foco em decisões orientadas por dados."
          />    
          <ResumeCard
            title="Consultor de Negócios"
            subTitle="Consultoria"
            result="2012-2015"
            des="Atuava na análise de desempenho e identificação de gargalos operacionais para apoiar decisões estratégicas. Contribuiu com o crescimento de pequenos e médios negócios por meio da otimização de processos e melhoria na gestão."
          />  
          <ResumeCard            
            title="Estagiário"
            subTitle="Procuradoria Federal - Advocacia Geral da União"
            result="2010 - 2012"
            des="Atuou no setor de Execução Fiscal, utilizando sistemas do Banco Central e da Receita Federal para cumprimento de decisões judiciais. Contribuiu para a transformação digital do setor, aprimorando a organização de planilhas, automatizando processos e realizando análises processuais para otimizar a gestão de dados e a eficiência operacional."
          />       
        </div>     
      </div>
      <div>
        <div style={{ textAlign: 'justify', wordSpacing: '-1px' }} className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Consultor de IA"
            subTitle="Consultoria"
            result="2022-Atual"
            des="Atua na transformação de dados brutos, estruturados e não estruturados, em insights estratégicos. Desenvolve modelos de Machine Learning para previsão de demanda, análise de propensão de clientes (churn e conversão), segmentação avançada, otimização de portfólio de produtos e avaliação detalhada das principais métricas de negócio, apoiando decisões comerciais assertivas e otimizando resultados operacionais."
          />
        <ResumeCard
            title="Analista de Dados"
            subTitle="Nelogica Sistemas de Software"
            result="2022 - 2023"
            des="Atuou na coleta, limpeza e análise de dados provenientes de múltiplas fontes, transformando- os em insights estratégicos. Desenvolveu modelos preditivos utilizando algoritmos avançados de Machine Learning com o objetivo de aprimorar significativamente a qualidade da experiência do cliente. Construiu soluções capazes de prever comportamentos, antecipar demandas e personalizar interações, além de implementar dashboards e análises que apoiaram decisões estratégicas por meio da exploração eficiente dos dados disponíveis."
          />          
          <ResumeCard            
            title="Engenheiro de Software"
            subTitle="Lym Tech"
            result="Março a Julho de 2021"
            des="Automatizou processos e contribuiu para o desenvolvimento de uma plataforma integrada de CRM e ERP, otimizando a gestão e a centralização de dados. Atuou na detecção de fraudes, utilizando ferramentas avançadas para consultas em bases de dados, aplicando algoritmos robustos e análises estatísticas para identificar padrões suspeitos e mitigar riscos."
          />
          <ResumeCard
            title="CTO"
            subTitle="Alves Consultoria Imobiliária"
            result="2015-2019"
            des="Atuou na captação e retenção de clientes por meio da análise de indicadores estratégicos para embasar a tomada de decisões. Desenvolveu modelos de negócios e prestou consultorias para agregar valor além da intermediação, criando diferenciais competitivos no mercado. Além disso, estabeleceu parcerias estratégicas com stakeholders nacionais e internacionais, fortalecendo a posição da empresa no setor."
          />          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
