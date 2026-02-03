import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div
          style={{ textAlign: "justify", wordSpacing: "-1px" }}
          className="mt-14 w-full mb-22 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Senior Data Scientist - Applied AI & Research"
            subTitle="Instituto Atlântico"
            result="2025-Atual"
            des="Projeta e implementa agentes autônomos e soluções de IA generativa com LLMs, utilizando fine-tuning, RAG e sistemas multiagentes para automação de análise documental, pesquisa e geração de conhecimento com rastreabilidade. Converte pesquisas e papers científicos em soluções produtivas, avaliando viabilidade técnica e maturidade tecnológica (até TRL 6) para aplicações industriais. Desenvolve modelos de séries temporais e técnicas avançadas de Machine Learning aplicadas a desafios operacionais e estratégicos de clientes. Conduz iniciativas de P&D, governança e ética em IA, além de treinar e mentorar cientistas e equipes, disseminando boas práticas e elevando a maturidade analítica da organização."
          />

          <ResumeCard
            title="Marketing & Revenue Data Scientist"
            subTitle="Daniel Law"
            result="2023 - 2025"
            des="Desenvolveu modelos preditivos e estatísticos para marketing, receita e expansão de mercado, incluindo séries temporais, churn e segmentação de clientes. Conduziu análises de mercado e implantou soluções em produção com MLOps e Feature Stores, garantindo escalabilidade e confiabilidade dos modelos. Também construiu agentes inteligentes com LLMs baseados em Transformers para automatizar processos e apoiar decisões estratégicas de clientes nacionais e internacionais."
          />

          <ResumeCard
            title="Data Analyst"
            subTitle="Nelogica Sistemas de Software"
            result="2022 - 2023"
            des="Conduziu coleta, preparação e consolidação de dados de múltiplas fontes, garantindo qualidade das informações. Desenvolveu dashboards executivos e análises de desempenho para monitorar indicadores de atendimento e experiência do cliente. Aplicou modelos preditivos para antecipar comportamentos, priorizar demandas e apoiar ações de retenção e personalização."
          />

          <ResumeCard
            title="Marketing & Revenue Data Scientist"
            subTitle="Consultoria"
            result="2019 - 2021"
            des="Apoiou empresas na estruturação de estratégias de dados para marketing, vendas e receita, definindo KPIs e métricas de performance. Projetou pipelines e modelos analíticos para integração e governança da informação, além de desenvolver dashboards executivos e modelos preditivos de segmentação, priorização de oportunidades e maior previsibilidade de resultados."
          />
        
          <ResumeCard
            title="CTO"
            subTitle="Alves Consultoria Imobiliária"
            result="2015 - 2019"
            des="Liderou a estratégia de crescimento com definição e acompanhamento de KPIs, métricas de mercado e decisões orientadas por dados para aquisição e retenção de clientes. Desenvolveu modelos de negócio e processos comerciais com análises estatísticas e modelos preditivos de precificação e segmentação, aumentando previsibilidade de receita e competitividade. Estabeleceu parcerias nacionais e internacionais, integrando tecnologia, dados e operação para escalar a atuação no setor imobiliário."
          />

          <ResumeCard
            title="Estagiário"
            subTitle="Procuradoria Federal - AGU"
            result="2010 - 2012"
            des="Operou sistemas do Banco Central e da Receita Federal para cumprimento de decisões judiciais, contribuindo para a transformação digital da área por meio da organização de dados, automação de processos e maior precisão das informações."
          />
        </div>
      </div>

      <div>
        <div
          style={{ textAlign: "justify", wordSpacing: "-1px" }}
          className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="AI & Marketing Data Scientist"
            subTitle="Consultoria"
            result="2022-Atual"
            des="Transforma dados estruturados e não estruturados em inteligência para marketing, vendas e receita. Desenvolve modelos de Machine Learning para previsão de demanda, churn, conversão e segmentação, além de agentes baseados em LLMs para qualificação de leads e apoio à prospecção. Otimiza campanhas, investimentos e performance comercial, aumentando eficiência e previsibilidade de resultados."
          />

          <ResumeCard
            title="Data Scientist"
            subTitle="Appia"
            result="Abril a Agosto - 2023"
            des="Desenvolveu modelos de previsão de demanda com séries temporais e econometria para estimar vendas e sazonalidade. As análises orientaram decisões de trade marketing, reposição e distribuição, aumentando a acurácia das projeções, reduzindo rupturas e excessos e elevando a previsibilidade de vendas."
          />
          
          <ResumeCard
            title="Data Scientist"
            subTitle="Verde Agritech"
            result="2021 - 2022"
            des="Conduziu coleta, tratamento e análise de dados de marketing e vendas, aplicando estatística e modelagem preditiva para decisões orientadas por dados. Estruturou pipelines automatizados e um Data Lake para centralização e escalabilidade das informações. Desenvolveu modelos de segmentação, propensão, recompra e churn para qualificação de leads, personalização de campanhas e pós-venda, aumentando conversão, retenção e previsibilidade de receita."
          />

          <ResumeCard
            title="Solution Engineer"
            subTitle="Lym Tech"
            result="Março a Julho - 2021"
            des="Automatizou processos e desenvolveu integrações para plataforma unificada de CRM e ERP, estruturando fluxos e governança de dados para centralização e confiabilidade das informações de clientes. Organizou dados para apoiar gestão do funil, acompanhamento de leads e maior visibilidade das operações comerciais."
          />

          <ResumeCard
            title="Business Analyst"
            subTitle="Consultoria"
            result="2012 - 2015"
            des="Analisava desempenho operacional e identificava gargalos com base em indicadores e dados de negócio, apoiando decisões estratégicas. Estruturava e aprimorava processos de gestão para PMEs, aumentando controle, organização das informações e sustentando o crescimento."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;