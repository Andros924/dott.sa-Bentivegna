import React from "react";
import { ScrollText, Heart, Activity } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="bg-white p-6 space-y-8">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Il Mio Viaggio nella Medicina Vascolare
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p className="text-lg">
          Mi chiamo Erminia Bentivegna, e la mia storia è intrecciata con quella di innumerevoli pazienti che ho avuto il privilegio di curare nel corso degli anni. Dopo aver conseguito la laurea in medicina e chirurgia presso l'Università degli Studi di Palermo, ho scoperto la mia vera passione: la chirurgia vascolare.
        </p>
        
        <p className="text-lg">
          Per oltre due decenni, ho dedicato la mia vita professionale alla cura delle malattie vascolari, affrontando sfide sempre nuove e cercando soluzioni innovative per migliorare la qualità di vita dei miei pazienti.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
            <Heart className="mr-2" /> La Mia Missione
          </h3>
          <p>
            La mia missione è sempre stata quella di andare oltre la semplice cura, cercando di rigenerare, ricostruire e ridare speranza. Ogni giorno, affronto patologie complesse con determinazione e compassione.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 flex items-center">
          <ScrollText className="mr-2" /> Il Mio Campo di Battaglia
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">Rigenerazione Tessutale</h4>
            <p>Ho visto pazienti diabetici ritrovare la speranza grazie alle tecniche avanzate di rigenerazione tessutale per le ulcere ischemiche.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">Chirurgia delle Varici</h4>
            <p>Ho restituito comfort e fiducia a coloro che soffrivano di varici, migliorando non solo la loro salute ma anche la loro autostima.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">Linfedemi ed Elefantiasi</h4>
            <p>Ho affrontato condizioni debilitanti come linfedemi ed elefantiasi, offrendo sollievo e nuove prospettive di vita ai miei pazienti.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">Arteriopatie Periferiche</h4>
            <p>Ho combattuto le arteriopatie periferiche, ridando mobilità e indipendenza a chi temeva di averle perse per sempre.</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
            <Activity className="mr-2" /> Innovazione Continua
          </h3>
          <p>
            L'introduzione degli eteroinnesti cutanei per il trattamento delle ulcere ha rappresentato un punto di svolta nella mia pratica. Questa tecnica innovativa mi ha permesso di offrire nuove speranze a pazienti che avevano esaurito altre opzioni terapeutiche.
          </p>
        </div>

        <p className="text-lg mt-6">
          Ogni giorno, entro in sala operatoria o visito i miei pazienti con lo stesso entusiasmo e dedizione del primo giorno. La mia missione non è solo curare, ma accompagnare ogni persona nel suo percorso verso una vita migliore, libera dalle limitazioni delle malattie vascolari.
        </p>
      </div>
    </div>
  );
};

export default About;