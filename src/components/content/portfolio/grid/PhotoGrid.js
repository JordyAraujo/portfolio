import React, { Component } from 'react';
import './PhotoGrid.css';
import './Modal.css';
import Modal from './Modal'

class PhotoGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='w3-row-padding' style={{ margin: '0 -16px' }}>
                    <div className='w3-half'>
                        <div className='container'>
                            <img
                                src='https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2013.jpg'
                                alt='Baja 2013'
                                onClick={this.props.onClickBaja2013}
                            />
                        </div>

                        <div className='container'>
                            <img
                                src='https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/wsu.jpg'
                                alt='Wayne State University'
                                onClick={this.props.onClickWSU}
                            />
                        </div>

                        <div className='container'>
                            <img
                                src='https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2016.jpg'
                                alt='Baja 2016'
                                onClick={this.props.onClickBaja2016}
                            />
                        </div>
                    </div>

                    <div className='w3-half'>
                        <div className='container'>
                            <img
                                src='https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2014.jpg'
                                alt='Baja 2014'
                                onClick={this.props.onClickBaja2014}
                            />
                        </div>

                        <div className='container'>
                            <img
                                src='https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/mit.jpg'
                                alt='Massachusetts Institute Of Technology'
                                onClick={this.props.onClickMIT}
                            />
                        </div>

                        <div className='container'>
                            <img
                                src='https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/aresta.jpg'
                                alt='Aresta 3D'
                                onClick={this.props.onClickAresta}
                            />
                        </div>
                    </div>
                </div>
                <Modal
                    title = 'XIX Competição Baja SAE Brasil'
                    content = "Como competidor novato na Equipe Car-Kará de Baja SAE, cumpri as funções de fabricação e manutenção exigidas pela equipe.
                    Foi um grande marco no meu aprendizado, quando começou meu contato com a indústria e com o mundo maker. O contato
                    com as competições Baja SAE, que visam simular o funcionamento de uma pequena empresa projetista e fabricante de
                    um protótipo para apresentação no mercado, me tornou um profissional mais completo, uma vez que pude experimentar
                    o trabalho em equipe em todas as suas formas. Da parte de projeto técnico ao 'chão de fábrica', com fabricação e
                    resolução de problemas, muitas vezes sobre pressão."
                    display = {this.props.modalBaja2013}
                    onClickClose = {this.props.onClickClose}
                />
                <Modal
                    title = 'XX Competição Baja SAE Brasil'
                    content = 'No ano seguinte ganhei mais responsabilidades na Equipe. Organizei e coordenei a seleção dos novos integrantes, bem
                    como participei ativamente do treinamento inicial dos mesmos. Logo depois subi de posição na Equipe, passando a ser
                    Chefe do Subsistema de Eletrônica, que era muito carente de produção, ao ponto de nenhum dos integrantes ter conhecimento
                    prático ou teórico do assunto. Comecei então um trabalho do zero, fazendo todo o levantamento teórico do assunto
                    e aplicando o mesmo na fabricação do protótipo. Neste ano construí um pequeno módulo com Arduino, que possuía uma
                    tela de LCD que passava informações em tempo real para o piloto. Eram elas velocidade instantânea, rotação do motor
                    e temperatura do motor. O módulo também possuía uma fileira de LEDs que demonstravam de forma quantitativa os giros
                    do motor.'
                    display = {this.props.modalBaja2014}
                    onClickClose = {this.props.onClickClose}
                />
                <Modal
                    title = 'XXII Competição Baja SAE Brasil'
                    content = 'De volta ao Brasil após o Programa, voltei à minha antiga Equipe, já como coordenador de Design e Estrutura. Uma área
                    completamente nova pra mim e que me teve muito a adicionar. Tive a oportunidade de estudar e principalmente praticar
                    métodos de fabricação mecânica como soldagem e usinagem, bem como outros processos mais voltados ao design do veículo,
                    como laminação de compósitos, pintura, polimento e acabamentos gerais. É importante ressaltar que o Projeto Baja
                    SAE tem uma carga prática tremenda, tanto em termos de Gestão e Projeto, quanto Fabricação e Manutenção. Mais tarde
                    me aventurei um pouco como Vice-Capitão da Equipe, quando pude aprender bastante sobre ferramentas de Gestão e Admnistração, 
                    mas não me encaixei bem no cargo e preferi voltar ao papel de Coordenador de Subsistema.'
                    display = {this.props.modalBaja2016}
                    onClickClose = {this.props.onClickClose}
                />
                <Modal
                    title = 'Estágio de Pesquisa no MIT'
                    content = 'Ainda como parte do Programa Ciência Sem Fronteiras, tive a oportunidade de trabalhar dois meses no SLOAN Automotive
                    Lab, do MIT. Onde tive contato com uma realidade completamente diferente da que tive contato até então. Lá eu trabalhei
                    como pesquisador assistente do laboratório, que no momento fazia pesquisas com emissão de motores a combustão (Diesel,
                    Gasolina e Flex), e fiquei responsável pelos tratamentos de dados vindos dos experimentos, utilizando principalmente
                    MATLAB para tal. Como trabalho paralelo, também pesquisei sobre sistemas de ar-condicionado de automóveis, quando
                    comecei a escrever um programa em MATLAB para modelagem física do sistema, que recebia variáveis e previa o funcionamento
                    na prática. Infelizmente, devido ao curto prazo do estágio, não pude concluir o programa e o mesmo ficou como propriedade
                    intelectual do Instituto.'
                    display = {this.props.modalMIT}
                    onClickClose = {this.props.onClickClose}
                />
                <Modal
                    title = 'Graduação Sanduíche na Wayne State University'
                    content = 'Participei como bolsista do Programa Ciência Sem Fronteiras, quando fiz um curso de inglês de dois meses pelo English
                    Language Institute e uma Graduação Sanduíche em Engenharia Mecânica de dois semestres, ambos na Wayne State University,
                    localizada em Detroit/MI, Estados Unidos. Lá eu resolvi cursar algumas matérias de fora do meu currículo original,
                    mas que pudessem me adicionar como profissioal, como por exemplo English Oral Skills, Machine Elements Design e Japonês Básico.
                    Além de toda a experiência acadêmica que tive lá, também pude crescer muito como pessoa com a vivência em uma cultura
                    diferente da minha e com uma visão de mundo renovada e estendida.'
                    display = {this.props.modalWSU}
                    onClickClose = {this.props.onClickClose}
                />
                <Modal
                    title = 'Estágio na Aresta 3D'
                    content = 'Já no final de 2016, fui estagiário na Aresta 3D, uma Startup Incubada na Inova Metrópole, incubadora de empresas de
                    Tecnologia da Informação do Instituto Metrópole Digital. A Aresta foi pioneira no Rio Grande do Norte, vendendo produtos
                    impressos em 3D com impressora de criação própria. A empresa era pequena, e por falta de pessoal eu acabei me vendo
                    responsável por várias tarefas, como criação de produtos por modelagem 3D (geralmente utilizando o software SolidWorks),
                    manutenção periódica dos equipamentos e impressoras, acompanhamento das impressões, definição de parâmetros de impressão
                    dos produtos, além resolução de problemas que pudessem surgir. Minha experiência na empresa foi muito satisfatória e
                    pude evoluir bastante lá dentro, pela oportunidade de participar do desenvolvimento e crescimento de uma empresa
                    de tecnologia disruptiva e poder acompanhar de perto a entrada no mercado de uma nova ideia tecnológica desconhecida
                    pela maioria da população.'
                    display = {this.props.modalAresta}
                    onClickClose = {this.props.onClickClose}
                />
                </React.Fragment>
        );
    }
}

export default PhotoGrid;
