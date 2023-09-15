import React, { useState } from "react";

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
        {isReadMore ? "Ver Más" : "Ver Menos"}
      </span>
    </div>
  );
};

const contenido = [
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/java-3628857-3029997.png",
    descripcion: "Java",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/python-3628999-3030224.png",
    descripcion: "Python",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-512/spring-16-283031.png",
    descripcion: "Spring",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-512/social-275-116309.png",
    descripcion: "Docker",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
    descripcion: "ReactJs",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/angular-3628622-3029847.png",
    descripcion: "Angular",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png",
    descripcion: "TypeScript",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/javascript-23-1174949.png",
    descripcion: "JavaScript",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/redux-3521674-2945118.png",
    descripcion: "Redux",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/graphql-3628813-3030090.png",
    descripcion: "GraphQl",
  }
];
const contenido2 = [
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/bootstrap-3628663-3029888.png",
    descripcion: "Bootstrap",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/sass-226054.png",
    descripcion: "Sass",
  },
  {
    foto: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
    descripcion: "MySql",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/git-225996.png",
    descripcion: "Git"
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/github-159-721954.png",
    descripcion: "GitHub"
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/json-3772176-3151302.png",
    descripcion: "Json",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png",
    descripcion: "NodeJs",
  },
  {
    foto: "https://cdn.iconscout.com/icon/premium/png-256-thumb/fork-1957434-1651206.png",
    descripcion: "Fork"
  },
  {
    foto: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programming-c-1662677-1411447.png",
    descripcion: "C#",
  },
  {
    foto: "https://cdn.iconscout.com/icon/free/png-256/asp-3-226071.png",
    descripcion: "Asp.Net",
  },
];

const Conocimientos = () => {
  return (
    <section id="conocimientos">
    <div className="__cardsknow">
      <h1 className="__cards__title">Conocimientos Nivel Senior</h1>
      <div className="__cardsknow__container">
        {contenido.map((e) => (
          <div className="__cardsknow__items">
            <img className="__cardsknow__img" src={e.foto} alt="andresllanos" />
            <p className="__cardsknow__description">{e.descripcion}</p>
          </div>
        ))}
      </div>
      <ReadMore>
        .
        <div >
          <div className="__cardsknow__container">
            {contenido2.map((e) => (
              <div className="__cardsknow__items">
                <img className="__cardsknow__img" src={e.foto} alt="andresllanos" />
                <p className="__cardsknow__description">{e.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </ReadMore>
    </div>
    </section>
  );
};

export default Conocimientos;
