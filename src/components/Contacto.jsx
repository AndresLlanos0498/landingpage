import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mqkwnndw");
  if (state.succeeded) {
    return (
      <div className ="__agradecimiento">
        <div className="__agradecimiento__container">
          <h1 className="__cards__title">Finalmente Decidiste Hacerlo :D</h1>
          <img
            className="__agradecimiento__img"
            src="https://images.pexels.com/photos/7430717/pexels-photo-7430717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="thanks"
          />
          <alert className="__agradecimiento__titulo">
            Muchas gracias por su comentario e invitacion, en breve estaremos
            en contacto, hasta luego.<br/>
            Andres Llanos del Aguila <br/>
            Developer
          </alert>
        </div>
      </div>
    );
  }
  return (
    <section id="contacto">
    <form onSubmit={handleSubmit} className="__form">
      <h1 className="__cards__title">Contactame (Sin miedo, si funciona el formulario) 😉</h1>
      <div className="__form__container">
        <label htmlFor="email" className="__form__titulo">
          Email *
        </label>
        <input className="__form__caja1" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="__form__titulo">Mensaje *</label>
        <textarea className="__form__textarea" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="__form__enviar"
          type="submit"
          disabled={state.submitting}
        >
          Enviar Correo *
        </button>
      </div>
    </form>
    </section>
  );
}
function Contacto() {
  return <ContactForm />;
}
export default Contacto;
