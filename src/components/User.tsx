import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';
import Modal from './Modal';
import UserForm from './UserForm';
import { user } from '../API/requests';

function User(): JSX.Element {
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState('');

  const history = useHistory();
  const { id }: { id: string } = useParams();

  const { isLoading, error, data } = useQuery<User, Error>('user', () =>
    user.getOne(id)
  );

  const { mutate } = useMutation(() => user.delete({ id }), {
    onSuccess: () => {
      setMessage('Utilisateur supprimé');
      setIsModal((prevState) => !prevState);
    },
  });

  if (isModal) {
    return (
      <Modal message={message} handleClick={() => history.push('/users')} />
    );
  }
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;
  return (
    <div>
      <UserForm
        mutationFn={user.update}
        initFirstname={data!.firstname}
        initLastname={data!.lastname}
        initEmail={data!.email}
        initProfession={data!.profession}
      />
      <button onClick={() => mutate()}>Supprimer</button>
    </div>
  );
}

export default User;
