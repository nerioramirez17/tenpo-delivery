
import styled from 'styled-components/native';
import { Image } from 'react-native';


export const Row = styled.View`
  flex-direction: row;    
`;

export const WrapperFirst = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const Title = styled.Text<{
  color?: string;
  size?: string;
  spacing?: boolean;
  bold?: boolean;
  }>`
  font-size: ${({ size }) => (size ? size : '40')}px;
  ${({ bold }) => bold && ' font-weight: bold'};
  color: ${({ color }) => (color ? color : 'black')};
  ${({ spacing }) => spacing && 'letter-spacing: 5'};
`;

export const Img = styled(Image)`
  margin-left: 10px;
`;