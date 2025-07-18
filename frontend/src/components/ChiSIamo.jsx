import React from 'react';

const ChiSiamo = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Immagine di sfondo */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      {/* Sfondo gradiente 1 */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Sfondo gradiente 2 */}
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Contenuto */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Chi Siamo</h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
            PasswordVault è una realtà che nasce tra il Livornese e il Pontederino, e offre un Team di giovani appassionati che non esitano ad innovare il settore
            della sicurezza e del data science. Il nostro obbiettivo è quello di rendere il mondo dei dati e delle password, il più semplice e intuitivo
            possibile, rendendo il suo utilizzo fruibile a chiunque. Rendendolo di facile utilizzo e intuitivamente semplice anche per i più anziani e inesperti.
          </p>
        </div>

        {/* Informazioni statistiche */}
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base text-gray-300">Sono i paesi su cui è disponibile per ora PasswordVault.</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">12</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base text-gray-300">Collegamenti full-time dei nostri users</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">3000+</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base text-gray-300">Ore a settimana di utilizzo</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">40</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base text-gray-300">Inserisci tutte le password che vuoi!</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">Illimitato</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ChiSiamo;
