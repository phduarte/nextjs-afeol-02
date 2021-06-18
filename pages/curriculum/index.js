import Header from "../../components/Header";
import Footer from "../../components/Footer";

var jobs = [
    {
        id: 1,
        title: 'Arquiteto de Software / Desenvolvedor Sênior / Tech Lead',
        company: 'Pris Software',
        desc: 'Atuar como principal desenvolvedor em projetos, assumindo protagonismo em funcionalidades críticas\nSer referência técnica para o time de desenvolvedores\nAuxiliar na definição, comunicação e implementação da arquitetura do sistema, visando sistemas escaláveis e sustentáveis\nAuxiliar na modelagem de alterações para atendimento a requisitos (modelos de domínio e dados, infraestrutura)\nColaborar com a capacitação técnica do time de desenvolvimento\nTrazer melhores práticas e novidades de tecnologia que possam alavancar produtos e iniciativas\nAuxiliar na implantação e disseminação de práticas para garantir qualidade e segurança do sistema',
        site: 'https://pris.com.br',
        begin: '2021-01-01T00:00:00+00:00',
        end: ''
    },
    {
        id: 2,
        title: 'Desenvolvedor de software sênior',
        company: 'Sonda',
        desc: 'Desenvolvimento e sustentação de funcionalidades dos produtos ProcWork Comply e SPED ECD e ECF e engenharia de RPA integrado ao programa da receita federal para validação e transmissão de arquivos das obrigações fiscais e contábeis.',
        site: 'https://www.sonda.com.br',
        begin: '2018-10-22T00:00:00+00:00',
        end: ''
    },
    {
        id: 3,
        title: 'Desenvolvedor de software sênior',
        company: 'Tivit',
        desc: 'Como parte do time de desenvolvimento e inovações fui responsável pela arquitetura e engenharia dos sistemas de automação de processos de BPO, colaborando no desenvolvimento de um framework com padrões que permitiram a concepção de produtos de RPA, CRM, Crawlers.',
        site: 'https://www.tivit.com.br',
        begin: '2018-03-01T00:00:00+00:00',
        end: ''
    }
]

var formation = [
    {
        id: 1,
        title: 'Pós-Graduação de Arquitetura de Software Distribuído',
        institution: 'PUC Minas - Pontifícia Universidade Católica de Minas Gerais',
        begin: '2021-04-01T23:20:46+00:00',
        end: '2022-05-01T23:20:46+00:00'
      },
      {
        id: 2,
        title: 'Pós-Graduação de Engenharia de Software',
        institution: 'Impacta',
        begin: '2017-03-01T00:00:00+00:00',
        end: '2019-07-01T00:00:00+00:00'
      },
      {
        id: 3,
        title: 'Tecnólogo em Análise e Desenvolvimento de Software',
        institution: 'Estácio',
        begin: '2010-03-01T000:00:00+00:00',
        end: '2013-09-01T00:00:46+00:00'
      }
]

export default function Curriculum() {
    return (
        <>
        <Header></Header>
        <section className="success" id="curriculum">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>CURRICULUM</h2>
                        <hr className="item-divider item-divider-light item-divider-star"></hr>
                    </div>
                </div>
               

                <div className="row job-item"  >
                    {
                        jobs.map((job, index) => {
                            return (
                                (index == 0 ? 
                                    <div key={index}>
                                        <div className="col-lg-3">
                                            <h3 className="headline-inline curriculum-title">
                                                <i className="fa fa-briefcase"></i> 
                                                EXPERIÊNCIA
                                            </h3>
                                        </div>  
                                        <div className='col-lg-6'>
                                            <h3>{job.title}</h3>
                                            <div className="job-sub-item">
                                                <i className="fa fa-building-o"></i>
                                                    {job.company}
                                            </div>
                                            <div className="job-sub-item">
                                                <i className="fa fa-globe"></i>
                                                <a href="{job.site}" target="_blank">{job.site}</a>
                                            </div>
                                            <p className="job-sub-item">{job.desc}</p>
                                            <hr></hr>
                                            <div className="col-lg-3 hidden"></div>
                                        </div>
                                    </div>                                                         
                                : 
                                    <div key={index} className="col-lg-6 col-lg-offset-3">
                                        <h3>{job.title}</h3>
                                        <div className="job-sub-item">
                                            <i className="fa fa-building-o"></i>
                                                {job.company}
                                        </div>
                                        <div className="job-sub-item">
                                            <i className="fa fa-globe"></i>
                                            <a href="{job.site}" target="_blank">{job.site}</a>
                                        </div>
                                        <p className="job-sub-item">{job.desc}</p>
                                        <hr></hr>
                                        <div className="col-lg-3 hidden"></div>
                                    </div>
                                )
                        
                            );
                        })
                    }
                </div>  


                <div className="row education-item"  >
                    {
                        formation.map((education, index) => {
                            return (
                                (index == 0 ? 
                                    <div key={index}>
                                        <div className="col-lg-3">
                                            <h3 className="headline-inline curriculum-title">
                                                <i className="fa fa-briefcase"></i> 
                                                FORMAÇÃO
                                            </h3>
                                        </div>  
                                        <div className='col-lg-6'>
                                            <h3>{education.title}</h3>
                                            <div className="education-sub-item">
                                                <i className="fa fa-building-o"></i>
                                                    {education.institution}
                                            </div>
                                            <hr></hr>
                                            <div className="col-lg-3 hidden"></div>
                                        </div>
                                    </div>                                                         
                                : 
                                    <div key={index} className="col-lg-6 col-lg-offset-3">
                                        <h3>{education.title}</h3>
                                        <div className="education-sub-item">
                                            <i className="fa fa-building-o"></i>
                                                {education.institution}
                                        </div>
                                        <hr></hr>
                                        <div className="col-lg-3 hidden"></div>
                                    </div>
                                )
                        
                            );
                        })
                    }
                </div>  

            </div> 
        </section>
        <Footer></Footer>
        </>
    )
}