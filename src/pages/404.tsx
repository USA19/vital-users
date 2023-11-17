import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetailsTitle, BackButton, BackButtonText, Image } from "../components";

const ErrorPage: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/')
  };
  return (
    <Image color={'#ccccff'} height='400px'>
      <UserDetailsTitle>
        Page Not Found
        <BackButton onClick={handleBack}>
          &#8592;
          <BackButtonText>Click here to go back</BackButtonText>
        </BackButton>
      </UserDetailsTitle>
    </Image>
  );
}

export default ErrorPage