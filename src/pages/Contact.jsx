// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Configurazione della mappa
  const mapContainerStyle = {
    width: "100%",
    height: "40px",
  };

  const center = {
    lat: 38.128506, // Coordinate di Via Villa Rosato 28, Palermo
    lng: 13.337136,
  };

  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Il nome è obbligatorio";
    }
    if (!formData.email) {
      errors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Inserisci un'email valida";
    }
    if (!formData.phone) {
      errors.phone = "Il telefono è obbligatorio";
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      errors.phone = "Inserisci un numero di telefono valido";
    }
    if (!formData.date) {
      errors.date = "La data è obbligatoria";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simula invio dei dati al backend
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage(
          "Prenotazione inviata con successo! Ti contatteremo a breve."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
      }, 2000); // Simuliamo un ritardo di 2 secondi
    }
  };

  return (
    <div id="contact" className="bg-gray-200 p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Prenotazione e Contatti
      </h2>
      {/* Sezione Informazioni di Contatto */}

      <p className="text-lg text-gray-700">
        Email:{" "}
        <a href="mailto:erminia.bentivegna@virgilio.it" className="text-blue-600">
        erminia.bentivegna@virgilio.it
        </a>
      </p>
      <p className="text-lg text-gray-700">
        Telefono:{" "}
        <a href="tel:+393358140381" className="text-blue-600">
        +39 335 81 40 381
        </a>
      </p>
      <p className="text-lg text-gray-700">Indirizzo: Via Villa Rosato 28, Palermo</p>
      {/* Notifica di successo */}
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center mb-6">
          {successMessage}
        </div>
      )}

      {/* Modulo di Prenotazione */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
          Richiedi una Prenotazione
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Nome completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Inserisci il tuo nome"
              required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Inserisci la tua email"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Telefono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border ${
                formErrors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Inserisci il tuo numero di telefono"
              required
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Data della visita
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full p-3 border ${
                formErrors.date ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              required
            />
            {formErrors.date && (
              <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Messaggio (opzionale)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Aggiungi un messaggio (opzionale)"
            />
          </div>

          {/* Pulsante di invio con caricamento */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Invio in corso..." : "Invia Prenotazione"}
          </button>
        </form>
      </div>

      <div className="max-w-lg mx-auto">
        <iframe
          title="Mappa di Via Villa Rosato 28, Palermo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127811.77756309923!2d13.329198691951174!3d38.11569542931083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c1b064128b78b1%3A0xe5d3ab13b08d6b1e!2sVia%20Villa%20Rosato%2028%2C%20Palermo%20PA!5e0!3m2!1sit!2sit!4v1632863491057!5m2!1sit!2sit"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
