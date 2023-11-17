//packages block
import { FC } from 'react';
//component block
import {
  CardLoader, GridContainer, Image, UserDetailsContainer,
  UserDetailsItem, UserDetailsLabel, UserDetailsValue
} from '../components';
//other block
import { DetailUserLoaderPropType } from '../interface-types';

const DetailUserLoader: FC<DetailUserLoaderPropType> = ({ color }): JSX.Element => (
  <div>
    <Image color={color} height='400px'>
      <CardLoader height='15px' width="100px" />
    </Image>

    <UserDetailsContainer>
      <GridContainer>
        {Array.from({ length: 8 }, (_, index) => index + 1).map((item, index) => {
          return (
            <UserDetailsItem key={`${item}-index-${index}`}>
              <UserDetailsLabel>
                <CardLoader height='10px' />
              </UserDetailsLabel>

              <UserDetailsValue>
                <CardLoader height='10px' />
              </UserDetailsValue>
            </UserDetailsItem>
          )
        })}
      </GridContainer>
    </UserDetailsContainer>
  </div>
)

export default DetailUserLoader