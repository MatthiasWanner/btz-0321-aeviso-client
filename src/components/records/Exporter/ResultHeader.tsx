import React from 'react';
import { Link } from 'react-router-dom';
import { exportToCsv } from '../../../assets/exportToCsv';
import { useStats } from '../../../store/stats.slice';

import cloud from '../../../../media/icons/cloud.svg';

interface IProps {
  companyName: string;
  projectName: string;
  startDate: Date | null;
  endDate: Date | null;
}

function ResultHeader({ companyName, projectName, startDate, endDate }: IProps): JSX.Element {
  const { users: usersStats } = useStats();

  return (
    <div className="bg-white dark:bg-component shadow-buttonShadow  sm:sticky top-0">
      <div className="flex justify-between items-start mx-4 py-3">
        <div>
          <h1 className="font-bold sm:text-xl mr-5">Entreprise : {companyName}</h1>
          <h2 className="font-bold mt-2 sm:text-xl mr-5">Projet : {projectName} </h2>
        </div>
        <Link to="/rapport/exporter">
          <button
            className="
              focus:outline-none sm:w-full rounded-md sm:mt-8 h-9 text-white shadow-buttonShadow px-4 py-1 mr-3 sm:mr-0 bg-customGreen"
          >
            Retour
          </button>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row mt-5 pb-5 sm:pb-0 w-full justify-between">
        <h3 className="text-base sm:text-lg mx-4 sm:mx-6 sm:mb-8">
          Rapport du {startDate?.toLocaleDateString() || ''} au {endDate?.toLocaleDateString() || ''}
        </h3>
        <a
          href={exportToCsv({
            company: companyName,
            project: projectName,
            start: startDate?.toLocaleDateString() || '',
            end: endDate?.toLocaleDateString() || '',
            records: usersStats,
          })}
          download={`${companyName}_${projectName}_${startDate?.toLocaleDateString() || ''}_${
            endDate?.toLocaleDateString() || ''
          }.csv`}
          className="flex text-sm h-8 sm:text-base text-white items-center bg-customBlue px-4 py-1 shadow-buttonShadow rounded-md mx-3 mt-2 sm:mt-0 sm:mx-6 w-max"
        >
          Télécharger le rapport <img className="ml-2" src={cloud} alt="cloud" />
        </a>
      </div>
    </div>
  );
}

export default ResultHeader;
