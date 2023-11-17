//packages block
import styled from 'styled-components';
//other block
import {
  CardLoaderStyledComponentPropType,
  CardStyledComponentPropType,
  ImageStyledComponentPropType,
  PaginationButtonStyledComponentPropType
} from '../interface-types';

export const Card = styled.div<CardStyledComponentPropType>`
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ bgColor }) => bgColor || '#ffffff'};
  overflow: hidden;
  width: 250px;
  max-width: 100%;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
  cursor:pointer;
  &:hover {
    transform: scale(1.05);
  }
  height: 100%; 
`;

export const Image = styled.div<ImageStyledComponentPropType>`
  width: 100%;
  height: ${({ height }) => height || '200px'};
  background-color: ${({ color }) => color || '#f0f0f0'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  color: #555;
`;

export const UserInfo = styled.div`
  padding: 20px;
`;

export const UserName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

export const UserDetail = styled.p`
  margin-bottom: 8px;
  font-size: 1rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<PaginationButtonStyledComponentPropType>`
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#007bff' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#e9ecef')};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
`;

export const LoaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
`;

export const CardLoader = styled.div<CardLoaderStyledComponentPropType>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '200px')};
  background-color: #f0f0f0;
  border-radius: 12px;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
`;

export const AlertContainer = styled.div`
  padding: 10px 15px;
  margin: 10px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
`;

export const SuccessAlert = styled(AlertContainer)`
  background-color: #28a745;
`;

export const ErrorAlert = styled(AlertContainer)`
  background-color: #dc3545;
`;

export const AlertCloseIcon = styled.div`
display:flex;
align-items:center;
justifyContent:center;
cursor:pointer;
margin-right:10px
`
export const UserDetailsContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 20px auto;
`;

export const UserDetailsTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

export const UserDetailsItem = styled.div`
  margin-bottom: 10px;
`;

export const UserDetailsLabel = styled.span`
  font-weight: bold;
  display: block; /* Display label on a new line */
   margin-bottom: 5px;
`;

export const UserDetailsValue = styled.span`
  display: block; /* Display value on a new line */
`;

export const BackButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size:12px
  transition: background-color 0.3s;

  &:hover {
     background-color: rgba(200, 200, 200, 0.5);
  }
`;

export const BackButtonText = styled.span`
  margin-left: 8px;
`;

export const AppBar = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 12px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;