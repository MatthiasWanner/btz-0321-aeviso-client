import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import UpdateCompany from './UpdateCompany';
import { companies } from '../../API/requests';
import DeleteCompany from './DeleteCompany';
import Spinner from '../Spinner';

function Company(): JSX.Element {
  const { id }: { id: string } = useParams();

  const { isLoading, error, data } = useQuery<Company, AxiosError>(
    ['company', id],
    () => companies.getAllProjects(id),
    {}
  );

  // const [company, setCompany] = useState<Company | null>();

  // const { isLoading, error } = useQuery<Company, AxiosError>(['company', id], () => companies.getOne(id), {
  //   onSuccess: (data) => {
  //     setCompany(data);
  //   },
  //   staleTime: Infinity,
  // });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p>
        An error has occurred: {error.message}. Code: {error.code}
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2  grid-cols-1 grid-rows-2 gap-5 h-full w-full">
      <p className="text-white">{company?.name}</p>
      <div className="text-white sm:col-start-1 sm:row-start-1 sm:row-end-2 col-start-1 bg-black rounded-xl shadow-mainShadow mx-4 sm:mx-0 overflow-y-auto">
        Hello world
      </div>
      <div className="text-white sm:col-start-2 sm:row-start-1 sm:row-end-2 col-start-1 row-start-2 bg-black rounded-xl shadow-mainShadow mx-4 sm:mx-0 overflow-y-auto">
        hola guapo
      </div>
      <div className="sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-5 row-start-3 row-end-4 col-start-1 bg-black rounded-xl shadow-mainShadow mx-4 sm:mx-0">
        apero
      </div>
    </div>
  );
}

export default Company;
