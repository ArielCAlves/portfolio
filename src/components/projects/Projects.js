import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix,projectSeven,projectEight} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Acesse os links para mais detalhes"
          des="Meus Projetos"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Segmentação de Clientes no Mercado Imobiliário"
          des="Após extração dos dados do Viva Real foi feito um tratamento para identificar clusters (grupos) de imóveis a fim de segmentá-los por perfis e também identificar as principais características que levam um imóvel a ser valorizado."
          src={projectOne}          
          websiteLink="https://github.com/ArielCAlves/projetos"

        />
        <ProjectsCard
          title="Previsão de Turnover"
          des="Modelo de classificação criado a partir de dados dos colaboradores (descaracterizados em respeito à LGPD) para prever as chances, por meio de padrões, de um(a) candidato(a) abandonar a empresa tempos depois da contratação."
          src={projectTwo}          
          websiteLink="https://github.com/ArielCAlves/Infnet/tree/main"
          youtubeLink="https://youtu.be/i7YvC-HDdWU"
        />
        <ProjectsCard
          title="Webscraping"
          des="Extração de dados de todas as páginas do site de forma automatizada para construir uma tabela organizada."
          src={projectThree}          
          websiteLink="https://github.com/ArielCAlves/projetos"
        />
        <ProjectsCard
          title="Análise de Dados no Mercado de Games"
          des="Exploração de dados coletados do Kaggle para transformá-los em um arquivo csv mais limpo e construir um dashboard no Power BI utilizando modelagem Star Schema."
          src={projectFour}          
          websiteLink="https://github.com/ArielCAlves/projetos"
          youtubeLink="https://www.youtube.com/watch?v=ZIUCOC7wbSQ&t=3s&ab_channel=ArielCarvalho"
        />
        <ProjectsCard
          title="Estimativa de Preços de Imóveis no AIRBNB"
          des="Modelo de regressão criado para estimar preços dos imóveis no Airbnb e identificar as principais características que contribuíram para essa estimativa."
          src={projectFive}         
          websiteLink="https://drive.google.com/file/d/1LF9QrMBQKug-DxtBfDP4Rn5VqKAISkku/view?usp=drive_link"
        />
        <ProjectsCard
          title="Detecção de Câncer de Mama"
          des="Projeto feito em homenagem ao Outubro Rosa para identificar se o tumor encontrado é benígno ou não."
          src={projectSix}          
          websiteLink="https://github.com/ArielCAlves/deteccao-cancer-de-mama"
        />
        <ProjectsCard
          title="Automatização de Relatórios"
          des="ETL dos dados de forma automatizada para gerar relatórios por cidade e por loja e enviar para o email de cada gestor."
          src={projectSeven}          
          websiteLink="https://drive.google.com/file/d/1Bp5ciS4rwZVZN6CMcZ3usejsChwntikh/view?usp=drive_link"
        />
        <ProjectsCard
          title="Maratona Behind The Code – Latin America"
          des="Desenvolveu sistema de recomendações utilizando algoritmos avançados para Chatbot, IOT, Cloud, entre outras ferramentas a fim de auxiliar os gestores nas tomadas de decisões."
          src={projectEight}          
          websiteLink="https://drive.google.com/file/d/1Gm0lm_wCXwHiB6JSmg95yLGIYCfykgUk/view"
        />
      </div>
    </section>
  );
}

export default Projects