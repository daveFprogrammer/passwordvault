import React from "react";
import { Link } from "react-router-dom";

const TermsOfServicePage = () => {
  return (
    <div 
      className="bg-gray-100 py-16"
      style={{
        backgroundImage: 'url("/assets/terms-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Termini di Servizio</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Benvenuto nei Termini di Servizio di <strong>Password Vault</strong>. 
          Usando la nostra applicazione, accetti i seguenti termini e condizioni. 
          Ti invitiamo a leggerli attentamente.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">1. Accettazione dei Termini</h2>
        <p className="text-gray-600 leading-relaxed">
          Utilizzando questa applicazione, dichiari di accettare i termini stabiliti in questo documento. 
          Se non accetti uno o più di questi termini, ti invitiamo a non utilizzare i nostri servizi.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">2. Modifiche ai Termini</h2>
        <p className="text-gray-600 leading-relaxed">
          Ci riserviamo il diritto di modificare i termini in qualsiasi momento. 
          Le modifiche saranno pubblicate su questa pagina e avranno effetto immediato.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">3. Utilizzo Consentito</h2>
        <p className="text-gray-600 leading-relaxed">
          L'applicazione è progettata per gestire e organizzare le tue password in modo sicuro. 
          Sei responsabile di mantenere segreti i tuoi dati di accesso e di non condividere il tuo account con altri.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">4. Responsabilità</h2>
        <p className="text-gray-600 leading-relaxed">
          Pur impegnandoci a proteggere i tuoi dati, non possiamo garantire la totale sicurezza delle informazioni 
          memorizzate nella nostra applicazione in caso di attacchi esterni o incidenti imprevedibili.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">5. Privacy</h2>
        <p className="text-gray-600 leading-relaxed">
          Per informazioni su come trattiamo i tuoi dati personali, consulta la nostra 
          <Link to="/privacy" className="text-blue-500 hover:underline ml-1">Privacy Policy</Link>.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">6. Limitazioni di Responsabilità</h2>
        <p className="text-gray-600 leading-relaxed">
          Non saremo responsabili per danni indiretti, incidentali o consequenziali derivanti dall'uso della nostra applicazione.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">7. Contatti</h2>
        <p className="text-gray-600 leading-relaxed">
          Per domande o richieste relative ai Termini di Servizio, contattaci all'indirizzo:
          <a href="mailto:support@passwordvault.it" className="text-blue-500 hover:underline ml-1">
            support@passwordvault.it
          </a>.
        </p>
        
        <div className="text-center mt-8">
          <button 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => window.history.back()}
          >
            Torna Indietro
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
