// src/pages/Homepage.jsx
import React from 'react';
import doctorImage from '../assets/doctor-image.jpeg'; // Aggiungi un'immagine del medico

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sezione Benvenuto */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Benvenuti nello Studio della Dott.ssa Erminia Bentivegna</h1>
            <p className="text-lg mb-6">
              Chirurgo vascolare con anni di esperienza nella diagnosi e cura delle malattie vascolari. Prenditi cura della tua salute vascolare con la massima professionalità.
            </p>
            <a href="/contact" className="bg-accent text-white py-3 px-6 rounded hover:bg-accent-light">
              Prenota una visita
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={doctorImage} alt="Dott.ssa Erminia Bentivegna" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Specializzazioni e Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Diagnosi vascolari</h3>
              <p>Valutazioni complete per identificare patologie come trombosi, vene varicose e arteriosclerosi.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Chirurgia vascolare</h3>
              <p>Interventi chirurgici avanzati per trattare le malattie vascolari in modo sicuro ed efficace.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Terapie preventive</h3>
              <p>Consigli e trattamenti preventivi per migliorare la circolazione e prevenire patologie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Testimonianze */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Cosa dicono i pazienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic">"La Dott.ssa Bentivegna mi ha aiutato a recuperare la mia salute dopo un problema di vene varicose. Consiglio vivamente!"</p>
              <p className="text-sm mt-4 font-semibold">- Marco Rossi</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic">"Molto professionale e cortese, mi sono sentita in ottime mani durante tutto il percorso di cura."</p>
              <p className="text-sm mt-4 font-semibold">- Anna Bianchi</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic">"Ottimo chirurgo, disponibile e attento alle esigenze del paziente. Assolutamente consigliato."</p>
              <p className="text-sm mt-4 font-semibold">- Luigi Verdi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Orari e Contatti */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Orari di visita e Posizione</h2>
          <p className="text-lg mb-4">Studio Medico Via Villa rosato, 28, 90146 Palermo</p>
          <p className="text-lg mb-8">Orari di apertura: Lun-Ven 9:00 - 18:00</p>
          <a href="/contact" className="bg-primary text-white py-3 px-6 rounded hover:bg-primary-dark">
            Contattaci
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
