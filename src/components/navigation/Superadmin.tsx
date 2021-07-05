import React from 'react';
import Client from '../../../media/icons/Client.svg';
import { Link } from 'react-router-dom';

interface ISPNavbar {
  handleClose: () => void;
  Home: string;
  report: string;
  settings: string;
}

function SuperAdmin({ Home, report, settings, handleClose }: ISPNavbar): JSX.Element {
  return (
    <div>
      {' '}
      <nav className="list-none pt-10">
        <Link to="/aeviso">
          <li className="flex text-lg items-center h-14 rounded-xl">
            <img
              src={Home}
              className="mr-3 mb-1 h-6 w-6 bg-component dark:bg-component shadow-buttonShadow p-1 rounded-full"
              alt="homesvg"
            />
            <button className="focus:outline-none" onClick={handleClose}>
              Accueil
            </button>
          </li>
        </Link>
        <Link to="/clients">
          <li className="flex text-lg mt-3 items-center h-14 ">
            <img
              src={Client}
              className="mr-3 h-6 w-6 bg-component dark:bg-component shadow-buttonShadow p-1 rounded-full mb-1"
              alt="homesvg"
            />
            <button className="focus:outline-none" onClick={handleClose}>
              Clients
            </button>
          </li>
        </Link>
        <Link to="/records/export">
          <li className="flex text-lg mt-3 items-center h-14">
            <img
              src={report}
              className="mr-3 h-6 w-6 bg-component dark:bg-component shadow-buttonShadow p-1 rounded-full mb-1"
              alt="homesvg"
            />
            <button className="focus:outline-none" onClick={handleClose}>
              Rapport
            </button>
          </li>
        </Link>
        <li className="flex text-lg mt-3 items-center h-14">
          <img
            src={settings}
            className="mr-3 h-6 w-6 bg-component dark:bg-component shadow-buttonShadow p-1 rounded-full mb-1"
            alt="homesvg"
          />
          <button className="focus:outline-none" onClick={handleClose}>
            Réglages
          </button>
        </li>
      </nav>
    </div>
  );
}

export default SuperAdmin;