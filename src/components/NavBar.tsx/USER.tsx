import React from 'react';
interface ISPNavbar {
  handleClose: () => void;
  Home: string;
  report: string;
  settings: string;
  newReport: string;
}

function USER({ newReport, Home, report, settings, handleClose }: ISPNavbar): JSX.Element {
  return (
    <div>
      <nav className="list-none pt-5">
        <li className="flex text-lg  items-center pl-5 h-14 rounded-xl">
          <img src={Home} className="mr-3 mb-1" alt="homesvg" />
          <button className="focus:outline-none" onClick={handleClose}>
            Accueil
          </button>
        </li>
        <li className="flex text-lg  pl-5 mt-5 items-center h-14">
          <img src={newReport} className="mr-3 mb-1" alt="homesvg" />
          <button className="focus:outline-none" onClick={handleClose}>
            Nouveau Rapport
          </button>
        </li>
        <li className="flex text-lg  pl-5 mt-5 items-center h-14">
          <img src={report} className="mr-3 mb-1" alt="homesvg" />
          <button className="focus:outline-none" onClick={handleClose}>
            Rapport
          </button>
        </li>
        <li className="flex  text-lg  pl-5 mt-5 items-center h-14">
          <img src={settings} className="mr-3 mb-1" alt="homesvg" />
          <button className="focus:outline-none" onClick={handleClose}>
            Réglages
          </button>
        </li>
      </nav>
    </div>
  );
}

export default USER;
