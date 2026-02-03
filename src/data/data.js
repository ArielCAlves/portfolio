import { AiOutlineLineChart } from "react-icons/ai";
import { FaBrain, FaDatabase, FaSearch } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { GiArtificialIntelligence, GiMagnifyingGlass } from "react-icons/gi";
import { BsBarChart } from "react-icons/bs";

export const featuresData = [
 {
  id: 1,
  icon: <AiOutlineLineChart />,
  title: "Forecasting | Séries Temporais",
  des: "Modelos preditivos de demanda, vendas e sazonalidade para planejamento de marketing, estoque e receita."
},
{
  id: 2,
  icon: <SiProgress />,
  title: "Personalização Data-Driven",
  des: "Segmentação, testes A/B e análises comportamentais para personalizar jornadas, campanhas e maximizar conversão e retenção."
},
{
  id: 3,
  icon: <FaDatabase />,
  title: "Big Data e Interpretabilidade",
  des: "Processamento de grandes volumes de dados e explicabilidade de modelos para decisões confiáveis em marketing e negócio."
},
{
  id: 4,
  icon: <FaSearch />,
  title: "Data Mining",
  des: "Coleta, mineração e enriquecimento de dados para descoberta de padrões, oportunidades comerciais e inteligência de mercado."
},
{
  id: 5,
  icon: <FaBrain />,
  title: "Machine Learning",
  des: "Modelos de churn, propensão, recomendação e precificação para otimizar aquisição, retenção e crescimento de receita."
},
{
  id: 6,
  icon: <BsBarChart />,
  title: "Marketing & Revenue Analytics",
  des: "Análise orientada por dados para otimização de campanhas, segmentação de clientes, previsão de receita, churn, LTV e alocação eficiente de investimentos em marketing."
},
{
  id: 7,
  icon: <GiArtificialIntelligence />,
  title: "NLP | LLM | RAG | FineTuning",
  des: "Agentes e soluções com IA generativa para automação, extração de conhecimento, qualificação de leads e suporte inteligente à decisão."
},
{
  id: 8,
  icon: <GiMagnifyingGlass />,
  title: "Pesquisa | Relatórios",
  des: "Estudos analíticos, avaliações de mercado e relatórios executivos para suportar decisões estratégicas baseadas em evidências."
}
];
