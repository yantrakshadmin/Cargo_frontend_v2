import React, { useState } from 'react';

import { Authenticated, NotAuthenticated } from '@app/common/hocs/Authentication';
import { useUser } from '@app/common/hooks/user';
import { LoadAPI } from 'hocs/LoadAPI';

const Success = ({ data }) => (
  <h1>
    isVerified:
    {data.verified}
  </h1>
);

const Error = ({ error }) => <h1>Error in meta</h1>;

export function Profile() {
  const user = useUser();
  const [username, setUsername] = useState('');

  return (
    <>
      <Authenticated>
        <h1>
          Name:
          {user.name}
        </h1>

        <h2>
          Email:
          {user.email}
        </h2>
      </Authenticated>
      <NotAuthenticated>Not Authenticated</NotAuthenticated>
      <br />
      <input type='text' onChange={(event) => setUsername(event.target.value)} />
      loging...
      {username}
      <br />
      <LoadAPI
        url='/user/meta/'
        toLoad={false}
        options={{
          secure: false,
          params: {
            username,
          },
        }}
        success={Success}
        error={Error}
      />
    </>
  );
}
