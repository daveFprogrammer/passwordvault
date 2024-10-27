import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600 ">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Pagina non trovata</h1>
        <p className="mt-6 text-lg text-gray-500">Spiacenti, non siamo riusciti a trovare la pagina che stai cercando.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Torna alla home
          </Link>
          <Link to="/supporto" className="text-sm font-semibold text-gray-900">
            Contatta il supporto <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
