
import styled from 'styled-components/native';
import { Image } from 'react-native';


export const Wrapper = styled.View`
  width: 90px;
  height: 130px;
  align-items: center;
  position: relative;
  margin-right: 12px;
  margin-top: 8px;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 90px;
  border-radius: 20px;
  margin-bottom: 8px;
`;

export const Title = styled.Text<{
  color?: string;
  size?: string;
  bold?: boolean;
}>`
  font-size: ${({ size }) => (size ? size : '16')}px;
  ${({ bold }) => bold && ' font-weight: bold'};
  color: ${({ color }) => (color ? color : 'black')};
`;

export const BottomLetter = styled.View`
  flex-direction: row;
`;

export const Promo = styled.View`
  position: absolute;
  background-color: #15bfab;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  right: -5px;
  top: -5px;
`;

export const PromoText = styled.Text`
  color: white;
  font-size: 8px;
  text-align: center;
`;