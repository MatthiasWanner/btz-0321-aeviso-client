import { AxiosError } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

import { jobs, project } from '../../../API/requests';
import { useStats } from '../../../store/stats.slice';
import Spinner from '../../Spinner';
import { getTotalHours, transformWeeklyBasisToNumber } from '../../../assets/exportToCsv';

interface IOneUser {
  firstName: string;
  lastName: string;
  projectId: string;
  userId: string;
  jobId: string;
  start: Date | null;
  end: Date | null;
  weeklyBasis: IResultUser['weeklyBasis'];
}

function OneUserStats({
  firstName,
  lastName,
  projectId,
  userId,
  jobId,
  start,
  end,
  weeklyBasis,
}: IOneUser): JSX.Element {
  const { dispatchAddUser } = useStats();

  const {
    data: records = [],
    isLoading: recordIsLoading,
    error: recordIsError,
  } = useQuery<IRecord[], AxiosError>(
    ['records', userId],
    () => project.getUserRecords(projectId, userId, start?.toISOString() as string, end?.toISOString() as string),
    {
      onSuccess: (record) => {
        dispatchAddUser({
          name: `${firstName} ${lastName}`,
          weeklyBasis: transformWeeklyBasisToNumber(weeklyBasis),
          halfDays: record.length,
          totalHours: getTotalHours(weeklyBasis, record.length),
        });
      },
    }
  );

  const totalHalfDays = records.length;

  const {
    data: jobDatas,
    isLoading: jobIsLoading,
    error: jobIsError,
  } = useQuery<Job, AxiosError>(['job', jobId], () => jobs.getOne(jobId));

  const error = jobIsError || recordIsError;

  if (jobIsLoading || recordIsLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p>
        An error as occurred : {error.message}. code:{error.code}
      </p>
    );
  }

  return (
    <div className="flex items-end mt-3 justify-between w-full py-2 border-b border-gray-500">
      <div className="flex flex-col sm:flex-row sm:items-end items-start">
        <p className="font-bold text-base">
          {firstName} {lastName}
        </p>
        <p className="sm:text-sm text-xs sm:ml-3 font-thin">/ {jobDatas?.label}</p>
      </div>

      {getTotalHours(weeklyBasis, totalHalfDays) === 0 ? (
        <p className="text-opacity-90 text-xs sm:text-sm text-mainBg">{'Aucun rapport effectué'}</p>
      ) : (
        <p>{getTotalHours(weeklyBasis, totalHalfDays)} heures</p>
      )}
    </div>
  );
}
export default OneUserStats;
