import React from "react";
import restaurantApp from '../components/assets/3.1-Menu Platos.png'
const contenido = [
  {
    foto: "https://mitokenonline.com/wp-content/uploads/2022/02/token-digital-bcp-1024x532.png",
    titulo: "Banca Móvil BCP Backend Microservicios ",
    descripcion: "Trabajo realizado con Spring, Java 11, Redis, Junit4-5, Fortify, DEVOPS, Jenkins, etc.",
    link: "https://github.com/AndresLlanos0498/Calculadora-JS-CSS-y-HTML"
  },
  {
    foto: "https://static.wixstatic.com/media/5efac2_1b9190101fd54944b93367c95fe0a906~mv2.jpg/v1/fill/w_1583,h_415,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5efac2_1b9190101fd54944b93367c95fe0a906~mv2.jpg",
    titulo: "Proyecto Banking creado en Bootcamp",
    descripcion: "Creacion de microservicios, utilizando WebFlux y RxJava, MongoDb y analisis de arquitectura.",
    link: "https://github.com/ajulcala/DiagramLx/blob/main/microservicio-alx.png"
  },
  {
    foto: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/239994417_109575391456402_8573325861675181397_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=mtUfkZ8U5_0AX9nWlC6&_nc_ht=scontent-lim1-1.xx&oh=00_AT9NYKEJjvLTtO_XBKKD3AtgxVozfdoG3DVzcom24Kojmw&oe=632A7836",
    titulo: "Proyecto Front-End Cold Fresh RV",
    descripcion: "Desarrollado con ReactJs, utilizando HTML y SCSS.",
    link: "https://www.coldfreshrv.com/"
  },
  {
    foto: "https://netappperu.com/img/bannner01.jpg",
    titulo: "Practicas Desarrollando parte de Pagina Web",
    descripcion: "Desarrollado con ReactJs, HTML y Css.",
    link: "https://www.netappperu.com/"
  },
  {
    foto: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    titulo: "Buscador de Imagenes Gratis",
    descripcion: "Desarrollado con ReactJs, utilizando TS, CSS, HTML y consumiendo api de Pexels con Redux.",
    link: "https://optimistic-yalow-70df9b.netlify.app/"
  },
  {
    foto: restaurantApp,
    titulo: "Diseño Aplicacion Restaurant App",
    descripcion: "Desarrollado con Java, Android y RetroFit",
    link: "https://github.com/AndresLlanos0498/RestaurantAppAndroid/tree/master",
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos">
    <div className="__cards">
      <h1 className="__cards__title">Participación en Proyectos</h1>
        <div className="__cards__container">
          {contenido.map((e) => (
            <div className="__cards__items">
              <img className="__cards__img" src={e.foto} alt="andresllanos" />
              <h2 className="__cards__titulo">{e.titulo}</h2>
              <p className="__cards__description">{e.descripcion}</p>
              <a href={e.link} target="_blank" rel="noreferrer" className="__cards__btn">Ver Proyecto</a>
            </div>
          ))}
        </div>
      </div>
      </section>
  );
};

export default Proyectos;
