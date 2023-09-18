import React, { useState } from "react";
import aboutme1 from '../components/assets/aboutme1.png';
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Ver Más Detalles" : "Ver Menos"}
      </span>
    </div>
  );
};

const contenido = [
  {
    foto: aboutme1,
    titulo: "Andres Enrique Llanos del Aguila",
    descripcion: "Desarrollador de sistemas, mis habilidades son creatividad, resolución de problemas e iniciativa propia. Tengo interés en desarrollarme en áreas como, desarrollador web, backend, frontend(FullStack). Me considero una persona autodidacta, ya que mayormente todo lo practicado y demostrado en proyectos que he realizado, es de aprendizaje externo. Y tengo en cuenta que no hay que dejar de aprender, siempre habrán cosas nuevas."
  }
];

const contenido2 = [
  {
    foto: "https://www.cutivalu.pe/wp-content/uploads/2021/06/utp-696x392.jpg",
    titulo: "UTP",
    descripcion: "Actualmente, técnico egresado del instituto IDAT, en la carrera de Desarrollo de Sistemas e Informática y estudiante universitario de Ingieneria de Sistemas en UTP.",
  },
  {
    foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdetrujillo.com%2Fwp-content%2Fuploads%2F2012%2F04%2Fmunicipalidad-plaza-de-armas-distrito-victor-larco-herrera-de-trujillo-com-696x341.jpg&f=1&nofb=1",
    titulo: "Ciudad Actual",
    descripcion: "Actualmente vivo en la Provincia de Trujillo, distrito de Huanchaco.",
  },
  {
    foto: "https://media-cdn.tripadvisor.com/media/photo-s/17/81/8b/b4/20190511-112911-largejpg.jpg",
    titulo: "Lugar de Nacimiento",
    descripcion: "Nací en cuidad de Pucallpa, un lugar muy cálido, lleno de bonitos paisajes y atractivos turisticos.",
  }
];

const About = () => {
  return (
    <section id="sobremi">
    <div className="__cardsabout">
      <h1 className="__cards__title">Sobre Mi</h1>
      <div className="__cardsabout__container">
        {contenido.map((e) => (
          <div className="__cardsabout__items">
              <h2 className="__cardsabout__titulo">{e.titulo} 
              <p className="__cardsabout__description">{e.descripcion}</p></h2>
              <img className="__cardsabout__img" src={e.foto} alt="andresllanos" />
          </div>
        ))}
      </div>
      <ReadMore>
        .
        <div>
          <div className="__cardsabout__container2">
            {contenido2.map((e) => (
              <div className="__cards__items">
                <img className="__cardsabout__img2"src={e.foto} alt="andresllanos" />
                <h2 className="__cardsabout__titulo">{e.titulo}</h2>
                <p className="__cardsabout__description">{e.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadMore>
    </div>
    </section>
  );
};

export default About;
