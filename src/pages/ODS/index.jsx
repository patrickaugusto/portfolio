import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './ODS.module.css'

function ODS() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.ods}>
          <div>
            <p>Objetivo de Desenvolvimento Sustentável</p>
            <div className='titulo'>
              
              <h1 className={styles.texto_titulo}>
              <span>8</span><br/>
                Trabalho decente e<br />
                crescimento econômico
              </h1>
            </div>
            <p>Promover o crescimento econômico inclusivo e sustentável,<br />
              o emprego pleno e produtivo e o trabalho digno para todos</p>
          </div>
          <div>
            <img className={styles.img_ods} src="./economy.png" alt="Imagem de Home" /> 
          </div>
        </div>

        <div className={styles.objetivo}>
          <h2>Objetivos</h2>
          <ol>
            <li>
              Sustentar o crescimento econômico per capita de acordo com as circunstâncias nacionais e, em particular,
              um crescimento anual de pelo menos 7% do produto interno bruto [PIB] nos países menos desenvolvidos
            </li>
            <li>
              Atingir níveis mais elevados de produtividade das economias por meio da diversificação,
              modernização tecnológica e inovação, inclusive por meio de um foco em setores de alto valor
              agregado e dos setores intensivos em mão de obra
            </li>
            <li>
              Promover políticas orientadas para o desenvolvimento que apoiem as atividades produtivas, geração de emprego decente,
              empreendedorismo, criatividade e inovação, e incentivar a formalização e o crescimento das micro, pequenas e médias empresas,
              inclusive por meio do acesso a serviços financeiros
            </li>
            <li>Melhorar progressivamente, até 2030, a eficiência dos recursos globais no consumo e na produção,
              e empenhar-se para dissociar o crescimento econômico da degradação ambiental, de acordo com o Plano Decenal de Programas sobre
              Produção e Consumo Sustentáveis, com os países desenvolvidos assumindo a liderança
            </li>
            <li>
              Até 2030, alcançar o emprego pleno e produtivo e trabalho decente para todas as mulheres e homens,
              inclusive para os jovens e as pessoas com deficiência, e remuneração igual para trabalho de igual valor
            </li>
            <li>
              Até 2020, reduzir substancialmente a proporção de jovens sem emprego, educação ou formação
            </li>
            <li>
              Tomar medidas imediatas e eficazes para erradicar o trabalho forçado, acabar com a escravidão moderna e o tráfico de pessoas,
              e assegurar a proibição e eliminação das piores formas de trabalho infantil, incluindo recrutamento e utilização de crianças-soldado,
              e até 2025 acabar com o trabalho infantil em todas as suas formas
            </li>
            <li>
              Proteger os direitos trabalhistas e promover ambientes de trabalho seguros e protegidos para todos os trabalhadores, incluindo os trabalhadores migrantes,
              em particular as mulheres migrantes, e pessoas em empregos precários
            </li>
            <li>
              Até 2030, elaborar e implementar políticas para promover o turismo sustentável, que gera empregos e promove a cultura e os produtos locais
            </li>
            <li>
              Fortalecer a capacidade das instituições financeiras nacionais para incentivar a expansão do acesso aos serviços bancários, de seguros e financeiros para todos
            </li>
          </ol>
        </div>




      </div>
      <Footer />
    </>
  );
}

export default ODS;
