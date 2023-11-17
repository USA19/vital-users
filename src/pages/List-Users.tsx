//packages block
import { FC, useEffect, useState } from 'react';
//component block
import UserCard from '../components/UserCard';
import { GridContainer, LoaderContainer } from '../components';
//other block
import server from '../axios';
import { UserType } from '../interface-types';
import UserCardLoader from '../components/CardLoader';
import { Alert } from '../components/Alert';

const ListUsers: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const { data } = await server.get('/users')
        setUsers(data)
        setIsLoading(false)
        Alert.success("Users Fetched Successfully")
      } catch (_) {
        setIsLoading(false)
      }

    })()
  }, []);

  return (
    <div>
      {!isLoading ? (
        <GridContainer>
          {users.map((user, index) => {
            const { id } = user
            return (
              <UserCard user={user} key={`${index}-${id}`} />
            )
          })}
        </GridContainer>
      ) : (
        <LoaderContainer>
          {Array.from({ length: 10 }, (_, index) => (
            <UserCardLoader key={index} />
          ))}
        </LoaderContainer>
      )}
    </div>
  )
}

export default ListUsers