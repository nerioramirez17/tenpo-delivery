
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';


export const Wrapper = styled.View`
  width: 160px;
  height: 60px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const Img = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #ffff;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
`;