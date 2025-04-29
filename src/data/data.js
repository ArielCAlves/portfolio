import { AiOutlineLineChart  } from "react-icons/ai";
import { FaBrain, FaDatabase } from "react-icons/fa";
import { SiProgress} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdAnalytics } from "react-icons/md";
import { GiArtificialIntelligence, GiMagnifyingGlass } from "react-icons/gi";
import { BsCardImage } from "react-icons/bs";

export const featuresData = [
  {
    id: 1,   
    icon: <AiOutlineLineChart />,
    title: "Forecasting | Séries Temporais",
    des: "Previsão de demanda. Previsão de preço de commodities.",
  },
  {
    id: 2,
    icon: <CgWebsite />,
    title: "Análise de Decisão",
    des: "Análises quantitativa e qualitativa de dados, Teste A/B.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Queries Big Data e Interpretabilidade",
    des: "Análises em tempo real. Manipulação de dados em ambientes distribuídos.",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Data Mining",
    des: "Coleta de dados. Mineração. Webscraping. Técnicas de Associação.",
  },
  {
    id: 5,
    icon: <MdAnalytics />,
    title: "KPI Dashboards",
    des: "Construção de métricas efetivas relacionadas ao negócio e painéis executivos para auxiliar na tomada de decisões.",
  },
  {
    id: 6,
    icon: <FaBrain />,
    title: "Machine Learning",
    des: "Segmentação de clientes. Previsão de Churn. Previsão de Turnover. Precificação. Sistema de Recomendação.",
  },
  {
    id: 7,
    icon: <GiArtificialIntelligence />,
    title: "NLP | LLM | RAG | LangChain",
    des: "Chatbots, extração de conhecimento e geração de respostas com LLMs e RAG pipelines.",
  },
  {
    id: 8,
    icon: <BsCardImage />,
    title: "Visual Recognition",
    des: "Reconhecimento de imagens, classificação visual e detecção de padrões em conteúdo multimídia.",
  },
  {
    id: 9,
    icon: <GiMagnifyingGlass />,
    title: "Pesquisa e Relatórios",
    des: "Análises técnicas aprofundadas, estudos de mercado e geração de relatórios orientados a insights.",
  },
];
