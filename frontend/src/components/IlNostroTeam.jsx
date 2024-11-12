import React from 'react';
import jack from "./assets/jack.jpg";
import davidino from "./assets/davidino.jpg";

const teamImageUrl = "https://www.euroarpa.it/immagini/team/team.png";

const teamMembers = [
  {
    name: 'Giacomo Mortara',
    role: 'Co-Founder / CEO',
    img: <img src={jack} alt="Jackkmortar" className="h-16 w-16 rounded-full shadow-lg" />,
  },
  {
    name: 'Davide Faldi',
    role: 'Co-Founder / CEO',
    img: <img src={davidino} alt="davide" className="h-16 w-16 rounded-full shadow-lg" />,
  },
];

const IlNostroTeam = () => {
  return (
    <div
      className="bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage: `url(${teamImageUrl})`,
      }}
    >
      <div className="bg-white/80 py-16 px-6 lg:px-8 rounded-lg max-w-7xl mx-auto">
        {/* Sezione di presentazione */}
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Il nostro team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Siamo un gruppo dinamico di professionisti altamente qualificati, uniti dalla passione per il nostro lavoro e dalla volontà di fare la differenza. Ogni membro del nostro team porta con sé una vasta esperienza, competenze specializzate e un impegno costante nel fornire soluzioni innovative e su misura per i nostri clienti. La nostra forza risiede nella collaborazione e nella sinergia che creiamo tra di noi, affrontando ogni sfida con creatività, dedizione e un approccio orientato ai risultati.

            Ci impegniamo a mantenere elevati standard di eccellenza, ponendo sempre il cliente al centro del nostro operato. La nostra missione è costruire relazioni di fiducia e durature, supportando i nostri clienti in ogni fase del loro percorso e contribuendo al loro successo. Siamo pronti a superare ogni aspettativa e a fare il massimo per trasformare le sfide in opportunità concrete.
          </p>
        </div>

        {/* Sezione membri del team */}
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
          {teamMembers.map((member, index) => (
            <li key={index}>
              <div className="flex items-center gap-x-6 bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {member.img}
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{member.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IlNostroTeam;
