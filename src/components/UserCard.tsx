import { FC } from 'react'
import { Card, Image, UserDetail, UserInfo, UserName } from '../components'
import { UserCardPropsType } from '../interface-types';
import { useNavigate } from 'react-router-dom';

const UserCard: FC<UserCardPropsType> = ({ user }): JSX.Element => {
  const navigate = useNavigate();
  const { id, name, email, address, phone, website, company } = user;
  const { street, city, zipcode } = address || {}
  const getFirstLetter = () => (name ? name.charAt(0).toUpperCase() : '');
  const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffccff', '#ffffcc']; // Add more colors as needed
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleCardClick = () => {
    navigate(`/${id}?color=${encodeURIComponent(randomColor)}`)
  };

  return (
    <Card onClick={handleCardClick}>
      <Image color={randomColor}>{getFirstLetter()}</Image>
      <UserInfo>
        <UserName>{name}</UserName>
        <UserDetail><strong>Email:</strong> {email}</UserDetail>
        <UserDetail><strong>Phone:</strong> {phone}</UserDetail>
        <UserDetail><strong>Website:</strong> {website}</UserDetail>
        <UserDetail>
          <strong>Address:</strong> {street}, {city}, {zipcode}
        </UserDetail>
        <UserDetail><strong>Company:</strong> {company.name}</UserDetail>
      </UserInfo>
    </Card>
  );
};

export default UserCard