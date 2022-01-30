import React from "react";
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const ContainerHeder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 40px;
  align-items: flex-start;
`;

export const Profile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 40px;
  align-items: flex-start;
`;

export const Img = styled.Image`
  border: 2px #40beaf;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-left: 10px;
`;

const Header = () => {
  return (
      <ContainerHeder>
          <Img source={require('../../../assets/persona.jpeg')}/>
        <AntDesign name='search1' size={25} color='black' />
      </ContainerHeder>
  );
};

export default Header;
