
import styled from 'styled-components/native';
import { SafeAreaView, FlatList, Image } from 'react-native';


export const AdreesContainer = styled.View`
  background-color: #d4f9f5;
  flex-direction: row;
  padding: 15px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-left: 50px;
  padding-bottom: 30px;
`;

export const Title = styled.Text<{
  color?: string;
  size?: string;
  bold?: boolean;
  }>`
  font-size: ${({ size }) => (size ? size : '40')}px;
  ${({ bold }) => bold && ' font-weight: bold'};
  color: ${({ color }) => (color ? color : 'black')};
`;