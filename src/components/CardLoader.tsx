//packages block
import { FC } from 'react';
//components block
import { Card, CardLoader, UserDetail, UserInfo } from '../components'

const UserCardLoader: FC = (): JSX.Element => (
  <Card>
    <CardLoader />
    <UserInfo>
      <UserDetail>
        <CardLoader height='5px' />
      </UserDetail>
      <UserDetail>
        <CardLoader height='5px' />
      </UserDetail>
      <UserDetail>
        <CardLoader height='5px' />
      </UserDetail>
      <UserDetail>
        <CardLoader height='5px' />
      </UserDetail>
      <UserDetail>
        <CardLoader height='5px' />
      </UserDetail>
      <UserDetail>
        <CardLoader height='5px' />
      </UserDetail>
    </UserInfo>
  </Card>
);

export default UserCardLoader