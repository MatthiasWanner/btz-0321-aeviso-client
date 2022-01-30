import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { companies, project } from '../../../API/requests';
import OneUser from './OneUser';
import Spinner from '../../Spinner';
import TotalHours from './TotalHours';
import ResultHeader from './ResultHeader';
import UsersList from './UsersList';

function FormResult(): JSX.Element {
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  const { projectId, companyId } = useParams<{ companyId: string; projectId: string }>();
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const startQuery = searchParams.get('start');
    const endQuery = searchParams.get('end');

    if (startQuery && endQuery) {
      setStart(new Date(startQuery));
      setEnd(new Date(endQuery));
    }
  }, [search]);

  const {
    data: projectDatas,
    isLoading: projectLoading,
    error: projectError,
  } = useQuery<Project, AxiosError>(['project', projectId], () => project.getOne(projectId), {
    enabled: !!projectId,
  });

  const {
    data: companyDatas,
    isLoading: companyLoading,
    error: companyError,
  } = useQuery<Company, AxiosError>(['company', companyId], () => companies.getOne(companyId), {
    enabled: !!companyId,
  });

  const {
    data: users = [],
    isLoading: recordLoading,
    error: recordError,
  } = useQuery<IResultUser[], AxiosError>('users', () => project.getUsers(projectId), {
    enabled: !!projectId,
  });
  const error = companyError || projectError || recordError;

  if (companyLoading || projectLoading || recordLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p>
        An error has occurred: {error.message}. code:{error.code}
      </p>
    );
  }

  return (
    <div className="flex flex-col justify-between dark:bg-component bg-white border dark:border-componentBorder h-full sm:w-full text-black dark:text-white font-roboto rounded-md shadow-buttonShadow dark:shadow-mainShadow mx-4 sm:mx-0 overflow-y-auto">
      <div>
        <ResultHeader
          companyName={companyDatas?.name || ''}
          projectName={projectDatas?.name || ''}
          endDate={end}
          startDate={start}
        />
        <UsersList users={users} projectId={projectId} start={start} end={end} />
      </div>
      <div className="shadow-inputShadow sm:sticky bottom-0 ">
        <TotalHours />
      </div>
    </div>
  );
}

export default FormResult;
