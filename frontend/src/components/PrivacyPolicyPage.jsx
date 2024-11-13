import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import casasicura from "./assets/casasicura.jpeg"; // Import diretto dell'immagine

const PrivacyPolicyPage = () => {
  return (
    <div
      className="relative py-24 sm:py-32"
      style={{
        backgroundImage: `url(${casasicura})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-8 bg-black bg-opacity-65">
        <h1 className="text-3xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-white leading-relaxed mb-6">
          Benvenuto nella nostra Privacy Policy. La tua privacy è importante per
          noi, e ci impegniamo a proteggerla. Di seguito, ti spieghiamo come
          raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          1. Informazioni che raccogliamo
        </h2>
        <p className="text-white leading-relaxed">
          Durante l'utilizzo della nostra applicazione, potremmo raccogliere
          alcune informazioni personali come:
          <ul className="list-disc list-inside mt-2">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li className="flex items-center gap-2">
              <FaPhone />
              Numero di telefono
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Indirizzi e domicili vari
            </li>
            <li>Dati relativi agli account memorizzati nella cassaforte</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          2. Come utilizziamo le informazioni
        </h2>
        <p className="text-white leading-relaxed">
          I dati raccolti vengono utilizzati per fornire e migliorare i nostri
          servizi, tra cui:
          <ul className="list-disc list-inside mt-2">
            <li>Gestione delle password e degli account memorizzati</li>
            <li>Notifiche e comunicazioni relative all'applicazione</li>
            <li>Miglioramenti dell'esperienza utente</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          3. Sicurezza dei dati
        </h2>
        <p className="text-white leading-relaxed">
          Implementiamo misure di sicurezza avanzate per proteggere i tuoi dati
          personali da accessi non autorizzati e violazioni. Tuttavia, ricorda
          che nessun sistema di sicurezza è perfetto.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          4. Contattaci
        </h2>
        <p className="text-white leading-relaxed">
          Se hai domande o dubbi sulla nostra Privacy Policy, contattaci via
          email all'indirizzo
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline ml-1 flex items-center gap-2"
          >
            <FaEnvelope /> supporto@passwordvault.it
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
