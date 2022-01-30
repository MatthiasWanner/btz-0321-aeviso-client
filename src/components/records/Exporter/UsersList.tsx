import React from 'react';
import OneUser from './OneUser';

interface IProps {
  users: IResultUser[];
  projectId: string;
  start: Date;
  end: Date;
}

function UsersList({ users, projectId, start, end }: IProps): JSX.Element {
  return (
    <div className="mb-20">
      {users.map((user) => {
        return (
          <div className="dark:text-white text-black mx-4 sm:mx-6 flex " key={user.id}>
            <OneUser
              firstName={user.firstName}
              lastName={user.lastName}
              projectId={projectId}
              userId={user.id}
              weeklyBasis={user.weeklyBasis}
              job={user.jobId}
              start={start}
              end={end}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
