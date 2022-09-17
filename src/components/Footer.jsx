import React from "react";

const Footer = () => {
  return (
    <footer className="__footer">
      <div className="__footer__container">
        <div className="__footer__items">
          <h4>Estructura Web</h4>

          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJs</a>
          <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">JavaScript</a>

          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a>

          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer">Css</a>

        </div>
        <div className="__footer__items">
          <h4>Contacto</h4>

          <a href="tel:+51902353658">Celular</a>

          <a href="mailto:andres.enrique98@gmail.com">Correo</a>

          <a href="https://wa.me/+51902353658">WhatsApp</a>

          <a href="https://goo.gl/maps/PQmvZ5z5eyAhop4R7" target="_blank" rel="noreferrer">Direccion</a>
        </div>
        <div className="__footer__items">
          <h4>Redes Sociales</h4>

          <a href="https://www.linkedin.com/in/andresllanos98/" target="_blank" rel="noreferrer">Linkedin <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" /></a>

          <a href="https://github.com/AndresLlanos0498" target="_blank" rel="noreferrer">GitHub <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github" /></a>
          <a href="https://twitter.com/AndresLlanos98" target="_blank" rel="noreferrer">Twitter <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" /></a>
          
          <a href="https://www.facebook.com/andresllanos9804a/" target="_blank" rel="noreferrer">Facebook <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
