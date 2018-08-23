import React, { Component } from "react";
import Skills from "../skills/Skills";
import ResumeDownload from "../ResumeDownload";

class About extends Component {
  render() {
    return (
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-32"
        id="about"
      >
        <h2>Sobre</h2>
        <hr className="w3-opacity" />
        <p>
          Me chamo Jordy Araújo de Alcântara, tenho 24 anos e sou o que está
          sendo chamado na indústria atual de "Professional Maker", profissional
          contemporâneo que tem origem na cultura DIY (Do It Yourself), com
          focos em criação, manutenção e aprimoramento de dispositivos novos e
          existentes. Minhas habilidades estão ligadas às áreas de engenharia,
          como Eletrônica, Robótica, Mecânica, Modelagem, Impressão 3D e
          Programação. Também tenho experiência com atividades mais
          tradicionais, como trabalho com metal, madeira, artes e processos
          relacionados. Sou especializado em métodos de fabricação com aço,
          trabalhos com resina, laminação de fibras (vidro e carbono), além de
          possuir experiência profissional com Impressão 3D e manutenção de
          equipamento relacionado.
        </p>
        <h3 className="w3-padding-16">Minhas habilidades</h3>
        <Skills skillname="Impressão/Modelagem 3D" percent="95%" />
        <Skills skillname="Fabricação Mecânica" percent="80%" />
        <Skills skillname="Programação" percent="80%" />
        <Skills skillname="Eletrônica e Robótica" percent="75%" />
        <br />

        <ResumeDownload />
      </div>
    );
  }
}

export default About;
