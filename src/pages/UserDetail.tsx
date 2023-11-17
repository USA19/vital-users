//packages block
import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
//component block
import DetailUserLoader from '../components/UserDetailLoader';
import {
  BackButton,
  BackButtonText,
  GridContainer, Image, UserDetailsContainer, UserDetailsItem,
  UserDetailsLabel, UserDetailsTitle, UserDetailsValue
} from '../components';
//other block
import server from '../axios';
import { ParamType, UserType } from '../interface-types';

const DetailUser: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams<ParamType>();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<UserType>()
  const [loading, setLoading] = useState<boolean>(true)
  const { name, email, address, phone, website, company } = user || {}
  const { street, city, zipcode } = address || {};
  const { name: companyName } = company || {}
  const color = searchParams.get('color') || "ffffcc";

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        if (id) {
          const { data } = await server.get(`/users/${id}`)
          setUser(data)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    })()
  }, [id]);

  const handleBack = () => {
    navigate('/')
  };

  return <div>
    {loading ?
      <DetailUserLoader color={color} /> : user ? (
        <div>
          <Image color={color} height='400px'>
            <UserDetailsTitle>{name}</UserDetailsTitle>
          </Image>

          <UserDetailsContainer>
            <BackButton onClick={handleBack}>
              &#8592;
              <BackButtonText>Go Back</BackButtonText>
            </BackButton>

            <GridContainer>
              {[
                { label: "Name", value: name },
                { label: "Email", value: email },
                { label: "Phone", value: phone },
                { label: "Website", value: website },
                { label: "Company", value: companyName },
                { label: "City", value: city },
                { label: 'Street', value: street },
                { label: 'ZipCode', value: zipcode }
              ].map((item) => {
                const { label, value } = item
                return (
                  <UserDetailsItem>
                    <UserDetailsLabel>
                      {label}
                    </UserDetailsLabel>

                    <UserDetailsValue>
                      {value}
                    </UserDetailsValue>
                  </UserDetailsItem>
                )
              })}

            </GridContainer>
          </UserDetailsContainer>
        </div>
      ) :
        <Image color={color} height='400px'>
          <UserDetailsTitle>
            User Not Found
            <BackButton onClick={handleBack}>
              &#8592;
              <BackButtonText>Click here to go back</BackButtonText>
            </BackButton>
          </UserDetailsTitle>
        </Image>
    }
  </div>

}

export default DetailUser