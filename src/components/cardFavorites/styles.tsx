
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const Wrapper = styled.View`
  width: 240px;
  height: 80px;
`;

export const Img = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BottomLetter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 6px;
  margin-bottom: 12px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  margin-left: 8px;
  margin-right: 6px;
  margin-bottom: 2px;
`;

export const Container = styled.View`
  background-color: #ffff;
  border-radius: 8px;
  margin-right: 6px;
  border: 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
`;

export const Logo = styled.Image`
  width: 30px;
  height: 30px;
  margin-top: -70px;
  margin-left: 10px;
  border-radius: 4px;
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
